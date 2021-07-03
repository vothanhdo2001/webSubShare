-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 03, 2021 at 11:33 PM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `subshare`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `coId` int(11) NOT NULL AUTO_INCREMENT,
  `cuId` int(11) NOT NULL,
  `shId` int(11) DEFAULT NULL,
  `reId` int(11) DEFAULT NULL,
  `content` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`coId`),
  KEY `cuId` (`cuId`),
  KEY `comment_ibfk_1` (`shId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`coId`, `cuId`, `shId`, `reId`, `content`) VALUES
(1, 2, NULL, NULL, 'còn cái nịt');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `cuId` int(11) NOT NULL AUTO_INCREMENT,
  `nName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `sex` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `mail` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `tRegister` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `introduce` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cuRank` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `cuStatus` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'enable',
  PRIMARY KEY (`cuId`),
  UNIQUE KEY `mail` (`mail`),
  UNIQUE KEY `nName` (`nName`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cuId`, `nName`, `pass`, `sex`, `mail`, `tRegister`, `introduce`, `cuRank`, `cuStatus`) VALUES
(2, 'NguyenNguyen', 'test123', 'Nam', 'test12341@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(3, 'OpOpOp', 'test123', 'Nữ', 'test12342@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(4, 'titeo', 'test123', 'Khác', 'test12343@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(5, 'conco', 'test123', 'Nam', 'vothanhdo20013@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'disnable'),
(6, 'voa', 'test123', 'Nữ', 'test12345@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'admin', 'enable'),
(7, 'namemot', 'test123', 'Khác', 'test12346@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(8, 'name23', 'test123', 'Nam', 'test12347@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(9, 'thanhvo', 'test123', 'Nữ', 'test12348@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(10, 'thanhtai', 'test123', 'Khác', 'test12349@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(11, 'khongco', 'test123', 'Nam', 'test123410@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'user', 'enable'),
(12, 'concoc', 'test123', 'Nữ', 'test123411@gmail.com', '2021-06-11 15:43:59', 'Không có gì để nói', 'admin', 'enable');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `reId` int(11) NOT NULL AUTO_INCREMENT,
  `pName` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `cuId` int(11) NOT NULL,
  `pLanguage` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `imagesLink` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `videoLink` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `info` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `tRequest` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pPrivate` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`reId`),
  KEY `QH1` (`cuId`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`reId`, `pName`, `cuId`, `pLanguage`, `category`, `imagesLink`, `videoLink`, `price`, `info`, `tRequest`, `pPrivate`) VALUES
(9, 'Kẻ phản nghịch', 7, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(10, 'Loki', 8, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(11, 'Hoa nở trăng vừa tròn', 9, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(12, 'Có lẽ là yêu', 10, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(13, 'Vô tình nhặt được tổng tài', 11, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(14, 'Song thế sủng phi', 12, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(15, 'Khúc biến tấu ánh trăng', 3, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(16, 'Take me out', 3, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(17, 'Keep running', 4, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(18, 'I am a singer', 5, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(20, 'Super brain', 7, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(21, 'You can, You BB', 8, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(22, 'With you all along', 9, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(23, 'Where are we going, Dad?', 10, 'Tiếng Trung', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(24, 'Trao giải Oscar', 11, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(25, 'Trao giải quả cầu vàng', 12, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(26, 'Trao giải quả bóng vàng', 2, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(27, 'trao giải mama 2019', 3, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(28, 'trao giải mama 2020', 4, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(29, 'Trao giải Grammy 2020', 5, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(30, 'Phỏng vấn Cúc Tịnh Y', 6, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(31, 'Phỏng vấn Cảnh điền', 7, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:32', 'Công khai'),
(33, 'Hội nghị thượng đỉnh y tế toàn cầu 2020', 9, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(34, 'Trailer Thả thính thiên hạ', 10, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(35, 'Trailer Khúc biến tấu ánh trăng', 11, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(36, 'Phần 1: Người yêu tôi là thầy giáo của em trai ', 12, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(37, 'Phần 2: Người yêu tôi là thầy giáo của em trai ', 2, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(38, 'Phần 3: Người yêu tôi là thầy giáo của em trai ', 3, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(39, 'Phần 4: Người yêu tôi là thầy giáo của em trai ', 4, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 60000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(40, 'Phần 5: Người yêu tôi là thầy giáo của em trai ', 5, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 30000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(41, 'Phần 6: Người yêu tôi là thầy giáo của em trai ', 6, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 40000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(42, 'Phần 7: Người yêu tôi là thầy giáo của em trai ', 7, 'Tiếng Trung', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', 50000, 'test1234@gmail.com', '2021-06-11 16:20:33', 'Công khai'),
(44, 'a', 2, 'Tiếng Việt', 'Phim', 'a', 'a', 2, 'a', '2021-06-25 19:05:26', 'Công khai'),
(45, 'sấdasda', 2, 'Tiếng Anh', 'Phim', 'aaaaaaa', 'aaaa', 1212, 'adsadas', '2021-06-26 19:21:53', 'Công khai'),
(46, 'con cá', 2, 'Tiếng Việt', 'Clip ngắn', 'aaaaaa', 'aaaaaaaaa', 1111, 'aaaaa', '2021-06-26 19:35:19', 'Công khai'),
(47, 'con cá', 2, 'Tiếng Việt', 'Clip ngắn', 'aaaaaa', 'aaaaaaaaa', 1111, 'aaaaa', '2021-06-26 19:35:31', 'Công khai'),
(48, 'a', 2, 'Tiếng Việt', 'Phim', 'a', 'a', 1, 'a', '2021-06-26 19:59:54', 'Công khai'),
(49, 'a', 2, 'Tiếng Việt', 'Phim', 'a', 'a', 1, 'a', '2021-06-26 20:00:22', 'Công khai'),
(50, 'con cá', 2, 'Tiếng Việt', 'Clip ngắn', 'a', 'a', 1, 'a', '2021-06-26 20:01:11', 'Công khai'),
(51, 'võ thành đô', 2, 'Tiếng Việt', 'Phim', 'a', 'a', 1, 'a', '2021-06-26 20:01:56', 'Công khai'),
(52, 'cá voi nhỏ', 2, 'Tiếng Anh', 'Phim', 'a', 'a', 1, 'a', '2021-06-26 20:03:24', 'Công khai'),
(53, 'con con cá cá', 2, 'Tiếng Việt', 'Phim', 'con con cá cá', 'con con cá cá', 1, 'con con cá cá', '2021-06-26 20:23:08', 'Công khai'),
(54, 'aaaaaaaaa', 2, 'Tiếng Việt', 'Phim', 'a', 'a', 1, 'a', '2021-06-26 20:29:37', 'Công khai'),
(55, 'abcdef', 2, 'Tiếng Việt', 'Phim', 'abcdef', 'abcdef', 11111, 'abcdef', '2021-06-26 20:39:54', 'Công khai'),
(56, 'eeeeeeeeeeee', 2, 'Tiếng Việt', 'Phim', 'eeeeeeeeeeee', 'eeeeeeeeeeee', 111, 'eeeeeeeeeeee', '2021-06-26 21:51:29', 'Công khai'),
(57, 'bốn con cò', 7, 'Tiếng Việt', 'Clip ngắn', 'a', 'a', 1, 'àdsadfgsdf', '2021-07-01 08:47:37', 'Công khai'),
(58, 'bốn con cò', 7, 'Tiếng Việt', 'Clip ngắn', 'a', 'a', 1, 'àdsadfgsdf', '2021-07-01 08:47:46', 'Công khai');

-- --------------------------------------------------------

--
-- Table structure for table `share`
--

DROP TABLE IF EXISTS `share`;
CREATE TABLE IF NOT EXISTS `share` (
  `shId` int(11) NOT NULL AUTO_INCREMENT,
  `reId` int(11) DEFAULT NULL,
  `pName` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `cuId` int(11) NOT NULL,
  `pLanguage` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `imagesLink` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `subLink` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `videoLink` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `tShare` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rate` float DEFAULT NULL,
  `pPrivate` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`shId`),
  KEY `QH2` (`cuId`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `share`
--

INSERT INTO `share` (`shId`, `reId`, `pName`, `cuId`, `pLanguage`, `category`, `imagesLink`, `subLink`, `videoLink`, `tShare`, `rate`, `pPrivate`) VALUES
(7, 8, 'Anh hùng xạ điêu', 12, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(8, 9, 'Kẻ phản nghịch', 2, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(10, 11, 'Hoa nở trăng vừa tròn', 4, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(11, 12, 'Có lẽ là yêu', 5, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(12, 13, 'Vô tình nhặt được tổng tài', 6, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(13, 14, 'Song thế sủng phi', 7, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 35, 'Công khai'),
(15, 15, 'Chưa suy nghĩ ra 1', 8, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 35, 'Công khai'),
(16, NULL, 'Chưa suy nghĩ ra 2', 9, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(17, NULL, 'Chưa suy nghĩ ra 3', 10, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(18, NULL, 'Chưa suy nghĩ ra 4', 11, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(19, NULL, 'Chưa suy nghĩ ra 5', 12, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(20, NULL, 'Chưa suy nghĩ ra 6', 2, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(21, NULL, 'Chưa suy nghĩ ra 7', 3, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(22, NULL, 'Chưa suy nghĩ ra 8', 4, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(23, NULL, 'Chưa suy nghĩ ra 9', 5, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(24, NULL, 'Chưa suy nghĩ ra 10', 6, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(25, NULL, 'Chưa suy nghĩ ra 11', 7, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(26, NULL, 'Chưa suy nghĩ ra 12', 8, 'Tiếng Thái', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(27, NULL, 'Chưa suy nghĩ ra 13', 8, 'Tiếng Thái', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(28, NULL, 'Chưa suy nghĩ ra 14', 9, 'Tiếng Thái', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(29, NULL, 'Chưa suy nghĩ ra 15', 10, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(30, NULL, 'Chưa suy nghĩ ra 16', 11, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(31, NULL, 'Chưa suy nghĩ ra 17', 12, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(32, NULL, 'Chưa suy nghĩ ra 18', 2, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(33, NULL, 'Chưa suy nghĩ ra 19', 3, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(34, NULL, 'Chưa suy nghĩ ra 20', 4, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(35, NULL, 'Chưa suy nghĩ ra 21', 5, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(36, NULL, 'Chưa suy nghĩ ra 22', 6, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(37, NULL, 'Chưa suy nghĩ ra 23', 7, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(38, NULL, 'Chưa suy nghĩ ra 24', 8, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(39, NULL, 'Chưa suy nghĩ ra 25', 8, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(40, NULL, 'Chưa suy nghĩ ra 26', 9, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(41, NULL, 'Chưa suy nghĩ ra 27', 10, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(42, NULL, 'Chưa suy nghĩ ra 28', 11, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(43, NULL, 'Chưa suy nghĩ ra 29', 12, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(44, NULL, 'Chưa suy nghĩ ra 30', 2, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(45, NULL, 'Chưa suy nghĩ ra 31', 3, 'Tiếng Anh', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(46, NULL, 'Chưa suy nghĩ ra 32', 4, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(47, NULL, 'Chưa suy nghĩ ra 33', 5, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(48, NULL, 'Chưa suy nghĩ ra 34', 6, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(49, NULL, 'Chưa suy nghĩ ra 35', 7, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(50, NULL, 'Chưa suy nghĩ ra 36', 8, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(51, NULL, 'Chưa suy nghĩ ra 37', 8, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(52, NULL, 'Chưa suy nghĩ ra 38', 9, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(53, NULL, 'Chưa suy nghĩ ra 39', 10, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(54, NULL, 'Chưa suy nghĩ ra 40', 11, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(55, NULL, 'Chưa suy nghĩ ra 41', 12, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(56, NULL, 'Chưa suy nghĩ ra 42', 2, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(57, NULL, 'Chưa suy nghĩ ra 43', 3, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(58, NULL, 'Chưa suy nghĩ ra 44', 4, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(59, NULL, 'Chưa suy nghĩ ra 45', 5, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(60, NULL, 'Chưa suy nghĩ ra 46', 6, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(61, NULL, 'Chưa suy nghĩ ra 47', 7, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(62, NULL, 'Chưa suy nghĩ ra 48', 8, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(63, NULL, 'Chưa suy nghĩ ra 49', 8, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(64, NULL, 'Chưa suy nghĩ ra 50', 9, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(65, NULL, 'Chưa suy nghĩ ra 51', 10, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(66, NULL, 'Chưa suy nghĩ ra 52', 11, 'Tiếng Thái', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(67, NULL, 'Chưa suy nghĩ ra 53', 12, 'Tiếng Thái', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(68, NULL, 'Chưa suy nghĩ ra 54', 2, 'Tiếng Thái', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(69, NULL, 'Chưa suy nghĩ ra 55', 3, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(70, NULL, 'Chưa suy nghĩ ra 56', 4, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(71, NULL, 'Chưa suy nghĩ ra 57', 5, 'Tiếng Nhật', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(72, NULL, 'Chưa suy nghĩ ra 58', 6, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(73, NULL, 'Chưa suy nghĩ ra 59', 7, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(74, NULL, 'Chưa suy nghĩ ra 60', 8, 'Tiếng Ấn', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(75, NULL, 'Chưa suy nghĩ ra 61', 8, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Riêng tư'),
(76, NULL, 'Chưa suy nghĩ ra 62', 9, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Riêng tư'),
(77, NULL, 'Chưa suy nghĩ ra 63', 10, 'Tiếng Hàn', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Riêng tư'),
(78, NULL, 'Chưa suy nghĩ ra 64', 11, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Riêng tư'),
(79, NULL, 'Chưa suy nghĩ ra 65', 12, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Riêng tư'),
(80, NULL, 'Chưa suy nghĩ ra 66', 2, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Riêng tư'),
(81, NULL, 'Chưa suy nghĩ ra 67', 3, 'Tiếng Trung', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Riêng tư'),
(82, NULL, 'Chưa suy nghĩ ra 68', 4, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Riêng tư'),
(83, NULL, 'Chưa suy nghĩ ra 69', 5, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Riêng tư'),
(84, NULL, 'Chưa suy nghĩ ra 70', 6, 'Tiếng Anh', 'Khác', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Riêng tư'),
(85, NULL, 'Chưa suy nghĩ ra 71', 7, 'Tiếng Anh', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Riêng tư'),
(86, NULL, 'Chưa suy nghĩ ra 72', 8, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Riêng tư'),
(87, NULL, 'Chưa suy nghĩ ra 73', 8, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(88, NULL, 'Chưa suy nghĩ ra 74', 9, 'Tiếng Thái', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(89, NULL, 'Chưa suy nghĩ ra 75', 10, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(90, NULL, 'Chưa suy nghĩ ra 76', 11, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(91, NULL, 'Chưa suy nghĩ ra 77', 12, 'Tiếng Nhật', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(92, NULL, 'Chưa suy nghĩ ra 78', 2, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(93, NULL, 'Chưa suy nghĩ ra 79', 3, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(94, NULL, 'Chưa suy nghĩ ra 80', 4, 'Tiếng Ấn', 'Clip ngắn', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(95, NULL, 'Chưa suy nghĩ ra 81', 5, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(96, NULL, 'Chưa suy nghĩ ra 82', 6, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(97, NULL, 'Chưa suy nghĩ ra 83', 7, 'Tiếng Hàn', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(98, NULL, 'Chưa suy nghĩ ra 84', 8, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(99, NULL, 'Chưa suy nghĩ ra 85', 8, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(100, NULL, 'Chưa suy nghĩ ra 86', 9, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(101, NULL, 'Chưa suy nghĩ ra 87', 10, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(102, NULL, 'Chưa suy nghĩ ra 88', 11, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(103, NULL, 'Chưa suy nghĩ ra 89', 12, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 3, 'Công khai'),
(104, NULL, 'Chưa suy nghĩ ra 90', 2, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 4, 'Công khai'),
(105, NULL, 'Chưa suy nghĩ ra 91', 3, 'Tiếng Anh', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 5, 'Công khai'),
(106, NULL, 'Chưa suy nghĩ ra 92', 4, 'Tiếng Thái', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 1, 'Công khai'),
(107, NULL, 'Chưa suy nghĩ ra 93', 5, 'Tiếng Thái', 'Game show', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:39:55', 2, 'Công khai'),
(108, NULL, 'aaaa1', 2, 'Tiếng Việt', 'Clip ngắn', 'aaaa1', 'aaaa1', 'aaaa1', '2021-06-26 22:01:08', NULL, 'Công khai'),
(109, NULL, 'aaaa1', 2, 'Tiếng Việt', 'Clip ngắn', 'aaaa1', 'aaaa1', 'aaaa1', '2021-06-26 22:03:41', NULL, 'Công khai'),
(110, NULL, 'aaaa12', 2, 'Tiếng Việt', 'Clip ngắn', 'aaaa1', 'aaaa1', 'aaaa1', '2021-06-26 22:03:58', NULL, 'Công khai'),
(111, 14, 'Song thế sủng phi', 7, 'Tiếng Trung', 'Phim', 'https://i3.wp.com/bilugo.com/upload/images/2021/05/ban-cung-phong-cua-toi-la-gumiho-2021_1622043972-big.jpg', 'https://drive.google.com/file/d/1CnUgIta7W4tmTEMk4nW2Wd3WkT9KbqGk/view?usp=sharing', 'https://motphjm.net/xem-phim/khuc-bien-tau-anh-trang-tap-31-i0-8980_113004.html', '2021-06-11 17:36:40', 11, 'Công khai'),
(112, NULL, 'ba con chim', 6, 'Tiếng Anh', 'Phim', 'a', 'a', 'a', '2021-07-01 08:44:21', NULL, 'Công khai'),
(113, NULL, 'ba con chim', 6, 'Tiếng Anh', 'Phim', 'a', 'a', 'a', '2021-07-01 08:44:34', NULL, 'Công khai');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`shId`) REFERENCES `share` (`shId`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `QH1` FOREIGN KEY (`cuId`) REFERENCES `customer` (`cuId`);

--
-- Constraints for table `share`
--
ALTER TABLE `share`
  ADD CONSTRAINT `QH2` FOREIGN KEY (`cuId`) REFERENCES `customer` (`cuId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
