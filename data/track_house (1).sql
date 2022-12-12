-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2022 年 12 月 12 日 16:25
-- 伺服器版本： 5.7.39-cll-lve
-- PHP 版本： 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `eve_kung_store`
--

-- --------------------------------------------------------

--
-- 資料表結構 `track_house`
--

CREATE TABLE `track_house` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `track_house`
--

INSERT INTO `track_house` (`id`, `name`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Hilda Anderson', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670821767.8876_profile1.png', '2021-09-02 22:56:17'),
(2, 'Olga Guerrero', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/438x422/B69/fff/?text=Olga Guerrero', '2022-02-04 13:17:10'),
(3, 'Eve Kung', '10evelyn04', '10evelyn04@gmail.com', 'fed33392d3a48aa149a87a38b875ba4a', '', '2021-02-20 09:51:29'),
(4, 'George Holloway', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/428x585/9A8/fff/?text=George Holloway', '2020-12-22 11:14:12'),
(5, 'Landon Martinez', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/468x479/B86/fff/?text=Landon Martinez', '2022-01-01 08:49:19'),
(6, 'Cecelia Moss', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670292244.4163_norbu-gyachung-6y88BSYNtcc-unsplash.jpg', '2021-07-10 20:22:28'),
(7, 'Bruce Walker', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/404x403/8B3/fff/?text=Bruce Walker', '2021-03-13 13:04:42'),
(8, 'Fred McCarthy', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/381x447/6A4/fff/?text=Fred McCarthy', '2020-03-11 01:51:52'),
(9, 'Gregory Copeland', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670790468.9729_gabriel-brito-FQ0S0mp3gSw-unsplash.jpg', '2021-03-22 13:31:00'),
(10, 'Ella Price', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/480x598/636/fff/?text=Ella Price', '2022-05-05 23:47:47'),
(11, 'Cutiepie', 'user11', 'user11@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-11-24 16:53:56'),
(12, '', 'hi', 'hi@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-01 11:44:01'),
(13, 'Cutiepie', 'user90', 'user90@aol.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670308954.4461_norbu-gyachung-6y88BSYNtcc-unsplash.jpg', '2022-12-04 13:28:17'),
(14, '', 'user100', 'user100@gmail.com', 'ab1a672c459d7cf2a602c0c0e43f5c1d', 'https://via.placeholder.com/400/?text=USER', '2022-12-05 17:42:04'),
(15, 'user0', 'user0', 'user0@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670886704.4696_gabriel-brito-FQ0S0mp3gSw-unsplash.jpg', '2022-12-05 23:45:34'),
(16, '', 'Liheng Yao', 'abc@hotmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://via.placeholder.com/400/?text=USER', '2022-12-10 05:14:54'),
(17, '', 'jasonke', '123@mail.com', '202cb962ac59075b964b07152d234b70', 'https://via.placeholder.com/400/?text=USER', '2022-12-10 05:41:40'),
(18, '', 'lili', 'fff@22.com', 'b59c67bf196a4758191e42f76670ceba', 'https://via.placeholder.com/400/?text=USER', '2022-12-10 06:03:57'),
(19, '', 'user001', 'njwmlr79841@chacuo.net', '856ea6e4bba70cb1d473579aa64130d3', 'https://via.placeholder.com/400/?text=USER', '2022-12-10 06:15:46'),
(20, '', '', '', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-11 13:40:06'),
(21, '', 'pp', 'pp@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-12 15:11:55'),
(22, '', '11111', '111111@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-12 15:32:06'),
(23, '', '1111122', '11111122@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-12 15:33:24'),
(24, '', 'oo', 'oo@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/?text=USER', '2022-12-12 15:35:11'),
(25, 'honeyboo', 'user1000', 'user1000@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'upload/1670885829.1413_gabriel-brito-FQ0S0mp3gSw-unsplash.jpg', '2022-12-12 15:55:53');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `track_house`
--
ALTER TABLE `track_house`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `track_house`
--
ALTER TABLE `track_house`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
