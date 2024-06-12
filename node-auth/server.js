require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const session = require('express-session');

const randomstring = require('randomstring');
const secretKey = randomstring.generate(32);


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Enable CORS for all routes
app.use(
  cors({ origin: "http://localhost:5173", credentials: true })
);

app.use(session({
  secret: secretKey, // Change this to a random secret key
  resave: false,
  saveUninitialized: true
}));


// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kmc'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Dummy products
let products = [
  { id: 1, name: 'Kayoola EVS model2023', price: 10, imageUrl: 'images/a.png' },
  { id: 2, name: 'Spare parts', price: 20, imageUrl: 'images/autoparts.png' },
  { id: 3, name: 'Kayoola EVS model2022', price: 30, imageUrl: 'images/b.png' },
  { id: 4, name: 'Kayoola couch', price: 40, imageUrl: 'images/d.png' },
  { id: 5, name: 'EV chargers', price: 40, imageUrl: 'images/picture8.png' }
];

let cart = [];

// Serve register.html for /register URL
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/register.html'));
});

// Serve login.html for /login URL
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Register Route
app.post('/register', (req, res) => {
  const { username, fname, lname, email, country, phone, category, password, confirm_password } = req.body;

  // Check if all fields are present
  if (!username || !fname || !lname || !email || !country || !phone || !category || !password || !confirm_password) {
    return res.status(400).send('All fields are required');
  }

  // Check if password and confirm_password match
  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, fname, lname, email, country, phone, category, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [username, fname, lname, email, country, phone, category, hashedPassword], (err, result) => {
    if (err) throw err;
    res.redirect('/login');
  });
});

//redirect to login
app.get('/redirect-to-login', (req, res) => {
  res.redirect('http://localhost:3000/login');
 
});



app.get('/go-to-frontend', (req, res) => {
  // Redirect to a route in your React frontend
  res.redirect('http://localhost:5173'); // Adjust the URL and route as needed
});

// Serve static files from the public directory
app.use(express.static('public'));

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send('Invalid Password');
    }

      // Store user information in session upon successful login
      req.session.user = {
        
        username: user.username,
        password: user.password,
        // You can store more user information if needed
      };

    // Assuming successful login, redirect to the cart page
    //  res.redirect('/cart');
   
    // res.json({success:true})
     res.redirect('/')
     
     
  });
});

// Shopping Routes
app.get('/welcome', (req, res) => {
  res.render('welcome', { products, cart });
// const data = { message: 'Button clicked! This is the new page (backend).' };
// res.json(data);
});

// Shopping Routes
app.get('/', (req, res) => {
   // Retrieve user information from the session
   const user = req.session.user;

   // Check if the user is logged in (session exists)
   if (!user) {
     return res.redirect('/login'); // Redirect to login if the user is not logged in
   }
 
   // Render the dashboard page template and pass the user information to it
   //res.render('dashboard', { user });
    res.render('index', { user, products, cart });
  // const data = { message: 'Button clicked! This is the new page (backend).' };
  // res.json(data);
});

app.post('/add-to-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity) || 1;
  const product = products.find(p => p.id === productId);

  if (product) {
    const cartItem = cart.find(p => p.id === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  }

  res.redirect('/');
});

// Route to handle logout
app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    // Redirect to login page or respond with a success message
    res.redirect('/login');
    // Alternatively, respond with a JSON message
    // res.json({ message: 'Logged out successfully' });
  });
});

app.get('/cart', (req, res) => {
  const totalCost = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('cart', { cart, totalCost });
});

app.post('/remove-from-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const productIndex = cart.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }

  res.redirect('/cart');
});

app.get('/checkout', (req, res) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('checkout', { cart, total });
});

app.post('/checkout', (req, res) => {

  // Process payment 
  cart = [];
  res.send('Payment successful. Kira Motors to configure payment');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
