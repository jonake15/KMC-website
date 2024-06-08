-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2024 at 04:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kmc`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `country` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `category` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confrim_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fname`, `lname`, `email`, `country`, `phone`, `category`, `password`, `confrim_password`) VALUES
(1, 'Sarah', 'Sarah', 'Akello', 'sarah@gmail.com', 'Uganda', '0700556672', 'personal', '$2a$08$dtLVcrZol7.l5HasNDU/5.JbsucsXSL7s.h9MJulrKRvQ7SvtxQDu', ''),
(2, 'Rita', 'Rita', 'Apio', 'rita@gmail.com', 'uganda', '078588343', 'business', '$2a$08$IpNptQyksVAMuxHihYDnguDOPN5ycQBRVCypl/dcJaurg5k5tPBpq', ''),
(3, 'mina', 'mina', 'Nakato', 'mina@gmail.com', 'uganda', '0757898998', 'perdonal', '$2a$08$uNxu86U4HMpltxBOWTBz0.cr83jXr59waHnEpShazcXycO2bNQN9.', ''),
(4, 'Nina', 'Nina', 'Amo', 'nina@gmail.com', 'uganda', '07887474389', 'personal', '$2a$08$eBeTtInpkHjxiClpbk8A4epexZlOthujyrnV2xUk2JIkiNuwq6e7O', ''),
(5, 'Tina', 'Tina', 'Nakato', 'tina@gmail.com', 'kenya', '07683936332', 'business', '$2a$08$rjrR0Kpn1Hnb1FTzbTjvP.qXmRoOdFaAviHQlK3m3e9JssHCkra6.', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
