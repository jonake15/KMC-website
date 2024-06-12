import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import icon from "../assets/images/icon.png";
import { NavLink, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import evs from "../assets/images/navbar/evs.png";
import coach from "../assets/images/navbar/coach.png";
import chargers from "../assets/images/navbar/chargers.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import a from "../assets/images/navbar/a.png";
import b from "../assets/images/navbar/b.png";
import c from "../assets/images/navbar/c.png";
import d from "../assets/images/navbar/d.png";


const Navbar = () => {

  const navigate = useNavigate();
  const handleLoginButtonClick = () => {
    axios.get('http://localhost:3000/redirect-to-login')
      .then(response => {
        // Handle successful redirection if needed
        console.log('Response:', response);
        console.log('Redirect URL:', response.request.responseURL); // Extract the redirection URL from the response headers
         window.location.href =  response.request.responseURL;
        console.log(response);
      
      })
      .catch(error => {
        // Handle error if redirection fails
        console.error('Redirection error:', error);
      });
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isDiscoverMore, setIsDiscoverMore] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // products
  const handleMouseEnter = () => {
    setIsHovered(true);
    // console.log(isHovered);
  };
  const handleMouseLeave = () => {
    
    setTimeout(()=>{setIsHovered(false)},100);
    // console.log(isHovered);
  };

  // services
  const handleMouseEnterServices = () => {
    setIsServices(true);
  };
  const handleMouseLeaveServices = () => {
    setTimeout(()=>{ setIsServices(false)},100);
   
  };

  // services
  const handleMouseEnterDiscover = () => {
    setIsDiscoverMore(!isDiscoverMore);
    setIsServices(false);
    setIsHovered(false);
  };
  const handleMouseLeaveDiscover = () => {
    setTimeout(()=>{setIsDiscoverMore(false)},100);
    
  };

  // auth
  const handleMouseEnterAuth = () => {
    setIsAuth(true);
  };
  const handleMouseLeaveAuth = () => {
    setIsAuth(false);
  };

  // menu
  const handleMenuBar = () => {
    setShowMenu(!showMenu);
  };

  // company
  const [company, setCompany] = useState(false);

  // media
  const [media, setMedia] = useState(false);

  // resources
  const [resources, setResources] = useState(false);

  // innovations
  const [innovations, setInnovations] = useState(false);

  // support
  const [support, setSupport] = useState(false);

  // products
  const [products, setProducts] = useState(false);

  // services
  const [services, setServices] = useState(false);

  const [query, setQuery] = useState(false);

  const [discover, setDiscoverMenu] = useState(false);
  const handleDiscoverMenu = () => {
    if (comapany == false) {
      setDiscoverMenu(true);
    }
  };

  const data = [
    {
      id: 1,
      name: "kayoola Evs",
      link: "/kayoola-evs",
    },
    { id: 2, name: "kayoola Coach", link: "/kayoola-coach" },
    { id: 3, name: "kayoola Chargers" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full flex justify-center  overscroll-none  text-[1.3rem] relative float-start ">
      <div
        style={{
          backdropFilter: "blur(100px)",
          background: "rgba(22, 22, 23, .8)",
        }}
        className=" text-white  flex justify-between w-full md:w-11/12 items-center  rounded-full md:mt-3"
      >
        {/* LOGO */}
        <div className="px-4">
          {" "}
          <Link to="/">
            <span className=" text-white text-[1.3rem]">
              <img className="w-10 h-10" src={icon} alt="KMC" />
            </span>
          </Link>
        </div>
        {/* SiteMap */}
        <div>
          <ul className="flex align-middle">
            <Link
              to='/products'
              className="hidden md:block px-[2rem]  cursor-pointer hover:text-white-500 hover:underline hover:font-semibold text-base py-4  active hover:transition-all ease-in" //hover:border-[#d91c5c]  hover:border-l-2 hover:border-r-2
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
               id="parent"
            >
              Products
              <div
               id="rev" className="font-normal"
              >
                {isHovered && (
                  <div
                  id="scale"
                    style={isHovered ? { transition: "all 0.5s ease-in" } : ""}
                     className="shadow-lg absolute p-4  left-4   md:w-full text-black rounded-lg top-[3.5rem] bg-white hover:transition duration-700 ease-in-out"
                  >
                    <ul className="flex justify-center items-center">
                    
                      <NavLink
                      id="slow"
                        to="/kayoola-evs"
                        className="px-6 active:underline"
                      >
                        
                          {" "}
                          <div
                            className="w-[12rem] h-[5rem]"
                            style={{
                              backgroundImage: `url(${evs})`,
                              backgroundPosition: "center",
                              objectFit: "center",
                            }}
                          ></div>
                         
                         
                          <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Kayoola EVS</p>
                     
                      </NavLink>
                      <NavLink
                      id="slow"
                        to="/kayoola-coach"
                        className="px-6 active:underline"
                      >
                        {" "}
                        <div
                          className="w-[12rem] h-[5rem]"
                          style={{
                            backgroundImage: `url(${coach})`,
                            backgroundPosition: "center",
                            objectFit: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                       
                        <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Kayoola Coach</p>
                      </NavLink>
                      <Link id="slow" to="/chargers" className="px-6">
                        
                        <div
                          className="w-[12rem] h-[5rem]"
                          style={{
                            backgroundImage: `url(${chargers})`,
                            backgroundPosition: "center",
                            objectFit: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                       
                        <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Chargers</p>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </Link>
            <li
              className="hidden md:block px-[2rem] cursor-pointer hover:text-white-500 hover:underline hover:font-semibold  text-base py-4 " //hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
           id="parent"
            >
              Services
              {/* services */}
              <div id="rev" className="font-normal">
                {isServices && (
                  <div
                   id="scale"
                    style={isServices  ? {
                      transition: "all 0.3s ease",
                    }
                  : {transition:'all 0.3s ease',transitionDelay:'2s',animation:'rev linear 0.2s'}
              }
                    className="shadow-lg absolute p-4  left-4   md:w-full text-black rounded-lg top-[3.5rem] bg-white hover:transition duration-700 ease-in-out"
                  >
                    <ul className="flex justify-center items-center  py-4">
                      <NavLink id="slow"
                        to="/contract-manufacturing"
                        className="px-6 hover:underline "
                      >
                         <div
                            className="w-[12rem] h-[5rem]"
                            style={{
                              backgroundImage: `url(${a})`,
                              backgroundPosition: "center",
                              objectFit: "center",
                              backgroundRepeat:'no-repeat'
                            }}
                          ></div>
                         
                        <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Contract Manufacturing</p>
                      </NavLink>
                      {/* <span id="slow" className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <Link id="slow" to="/product-support" className="px-6">
                      <div
                            className="w-[12rem] h-[5rem]"
                            style={{
                              backgroundImage: `url(${b})`,
                              backgroundPosition: "center",
                              objectFit: "center",
                              backgroundRepeat:'no-repeat'
                            }}
                          ></div>
                         
                        <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Product Support</p>
                      </Link>
                      {/* <span id="slow" className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <Link id="slow"
                        to="/engineering-services"
                        className="px-6 hover:underline"
                      >
                         <div
                            className="w-[12rem] h-[5rem]"
                            style={{
                              backgroundImage: `url(${c})`,
                              backgroundPosition: "center",
                              objectFit: "center",
                              backgroundRepeat:'no-repeat'
                            }}
                          ></div>
                         
                        <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Engineering Services</p>
                      </Link>

                      {/* <span id="slow" className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li id='slow' className="px-6">
                        <Link className="hover:underline" to="/vehicle-hire">
                        <div
                            className="w-[12rem] h-[5rem]"
                            style={{
                              backgroundImage: `url(${d})`,
                              backgroundPosition: "center",
                              objectFit: "center",
                              backgroundRepeat:'no-repeat'
                            }}
                          ></div>
                         
                          <p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Vehicle Hire</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li
              className="hidden md:block px-[2rem] cursor-pointer hover:text-white-500 hover:underline text-base py-4  transition-duration: 200ms hover:font-semibold transition-timing-function: ease-in-out;" //hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]
              onMouseEnter={handleMouseEnterDiscover}
              onMouseLeave={handleMouseLeaveDiscover}
              id="parent"
            >
              Discover More
              {/* Discover More */}
              <div id="rev" className="font-normal" >
                {isDiscoverMore && (
                  <div
                    id="scale"
                    style={
                      isDiscoverMore
                        ? {
                            transition: "all 0.3s ease",
                          }
                        : {transition:'all 0.3s ease',transitionDelay:'2s',animation:'rev linear 0.2s'}
                    }
                    className="shadow-lg absolute p-4  left-4   md:w-full text-black rounded-lg top-[3.5rem]   bg-white hover:transition duration-700 ease-in-out"
                  >
                    <ul  className="flex justify-center items-center ">
                      <li id="slow" className="px-6 " style={{transition:'all 0.8s ease'}}>
                        <ul>
                          <li className="font-bold">Company</li>
                          <Link className="hover:underline" to="/about">
                            <p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">About Us</p>
                          </Link>
                          <li><p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">History</p></li>
                          <Link className="hover:underline" to="/projects">
                          <p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">Career</p> 
                          </Link>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li id="slow" className="px-6">
                        <ul>
                          <li className="font-bold">Media </li>
                          <Link><p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">News Press</p></Link>
                        
                          <Link className="hover:underline" to="/blog">
                          <p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">Blogs</p> 
                          </Link>
                          <li><p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">Podcast</p></li>
                          <Link className="hover:underline" to="/clubs">
                          <p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">Invest</p>
                          </Link>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li id="slow" className="px-6">
                        <ul>
                          <li className="font-bold">Resources</li>
                          <Link className="hover:underline" to="/reports">
                          <p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">Annual Reports</p>
                          </Link>
                          
                          <Link className="hover:underline" to="/shop">
                          <p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">KMC Shop</p>
                          </Link>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li id="slow" className="px-6">
                        <ul>
                          <li className="font-bold">Innovations</li>
                          <Link className="hover:underline" to="/plants">
                          <p style={{transition:'all 0.1s ease-in-out'}} className=" hover:font-semibold hover:underline ">Kiira Vehicle Plant</p> 
                          </Link>
                          
                          <Link to="/concepts"><p style={{transition:'all 0.1s ease-in-out'}} className="text-center  hover:font-semibold hover:underline ">Concept Vehicles</p></Link>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li id="slow" className="px-6">
                        <ul>
                          <li className="font-bold">Support</li>
                          <li><p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">Service location</p></li>
                          <li><p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">Charging Location</p></li>
                          <li><p style={{transition:'all 0.1s ease-in-out'}} className="hover:font-semibold hover:underline ">Spare Parts</p></li>
                          <li>&nbsp;</li>
                        </ul>
                      </li>

                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="mx-4 overflow-y-hidden overscroll-none  flex ">
          <button
            className=" py-4 px-6 hidden md:block"
            onClick={() => {
              setQuery(!query);
            }}
          >
            <FaSearch />
          </button>
          {query && (
            <div
              className="absolute top-[3.5rem] right-1  bg-white md:w-2/12 text-black border"
              onMouseLeave={() => setQuery(false)}
            >
              <input
                type="search"
                name=""
                id=""
                className="bg-gray-100 "
                placeholder="🏸 Search Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // onClick={handleQuery}
              />
              <div id="template">
                {data
                  .filter((val) => {
                    if (searchTerm == "") {
                      return <div>Not found</div>;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(0, 2)
                  .map((val) => (
                    <div key={val.id} className="block">
                      <Link to={val.link}>{val.name}</Link>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <button
            className=" md:hidden  p-4 rounded-full"
            style={{ transition: "all 4s ease" }}
            onClick={handleMenuBar}
          >
            <IoMdMenu className="text-white text-3xl" />
          </button>

          {/* MenuBar */}

          <div id='menu-parent' className="overflow-visible">
          {showMenu && (
          <div   className="absolute overflow-hidden top-0 left-0 w-full h-[120svh] z-[110]   md:hidden bg-[#1f1f1f]"
           style={{ transition: "all 0.6s ease" }}>
            
              <div id='menu-scale'
                style={{ transition: "all 4s ease-out" }}
               
                className="relative   w-full h-auto"
              >
                <div
                  onClick={() => setShowMenu(false)}
                  className="  flex items-end flex-col  cursor-pointer "
                >
                  <IoMdClose className="mx-7 mt-5 text-3xl" />
                </div>
                <div className=" h-full mt-8 px-8">
                  <ul>
                    <NavLink 
                    to='/products'
                      className="pt-6 cursor-pointer active:underline"
                      onClick={() => setProducts(!products)}
                    >
                      Products
                      {products && (
                        <ul className="px-6 text-lg transition-all">
                          <Link to="/kayoola-evs">Kayoola Evs</Link>
                          <br />
                          <Link to="/kayoola-coach">Kayoola Coach</Link>
                          <br />
                          <Link to="/chargers"> Chargers</Link>
                        </ul>
                      )}
                    </NavLink>
                    <li
                      className="pt-6 cursor-pointer"
                      onClick={() => setServices(!services)}
                    >
                      Services
                      {services && (
                        <ul className="px-6 text-lg">
                          <Link to='/contract-manufacturing'>Contract Manufacturing</Link><br/>
                          <Link to='/product-support'>Product Support</Link><br/>
                          <Link to='/engineering-services'>Engineering Services</Link><br/>
                          <Link to="/vehicle-hire">Vehicle Hire</Link>
                        </ul>
                      )}
                    </li>
                    <li className="py-6 ">
                      <p id='menu-parent'>Discover More</p>
                      <ul className="px-6 text-lg">
                        <li onClick={() => setCompany(!company)}>
                          Company
                          {company && (
                            <ul className="text-sm px-6">
                              <Link to="/about">About Us</Link>
                              <li>History</li>
                              <li>Career</li>
                            </ul>
                          )}
                        </li>
                        <li onClick={() => setMedia(!media)}>
                          Media
                          {media && (
                            <ul className="text-sm px-6">
                              <li>New Press</li>
                              <li>Blogs</li>
                              <li>Podcast</li>
                              <li>Invest</li>
                            </ul>
                          )}
                        </li>
                        <li onClick={() => setResources(!resources)}>
                          Resources
                          {resources && (
                            <ul className="text-sm px-6">
                              <li>Annual reports</li>
                              <Link to="/shop">KMC Shop</Link>
                            </ul>
                          )}
                        </li>
                        <li onClick={() => setInnovations(!innovations)}>
                          Innovations
                          {innovations && (
                            <ul className="text-sm px-6">
                              <li>Kiira Vehicle Plant</li>
                              <Link to="/concepts">Concept Vehicles</Link>
                            </ul>
                          )}
                        </li>
                        <li onClick={() => setSupport(!support)}>
                          Support
                          {support && (
                            <ul className="text-sm px-6">
                              <li>Service Location</li>
                              <li>Charging Location</li>
                              <li>Spare Parts</li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
           
          </div>
           )}
          </div>
          

          <div
            onMouseEnter={handleMouseEnterAuth}
            onMouseLeave={handleMouseLeaveAuth}
          >
            <button
              style={{
                backdropFilter: "blur(10px)",
                background: "rgba(0,0,0,0.2)",
              }}
              className="  p-4 rounded-full hidden md:block"
            >
              <FaRegUser className="text-white " />
            </button>
            {/* services */}
            <div className="absolute top-[3.5rem] right-1  bg-white md:w-2/12 text-black">
              {isAuth && (
                <div
                  style={isAuth ? { transition: "0.3s" } : ""}
                  className="shadow-lg p-4 rounded-lg"
                >
                  <ul className="flex justify-center items-center  py-4">
                    <button onClick={handleLoginButtonClick} >
                    
                    Login
                 
                  </button>
                    
                    
                    <span className="border-r-2 border-gray-400">&nbsp;</span>
                    <NavLink to="/sign-up" className="px-6 active:underline">
                      SignUp
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
    </div>
  );
};

export default Navbar;
