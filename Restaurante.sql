-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-12-2024 a las 02:45:22
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(100) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `productname`, `price`) VALUES
(1, 'Coca Cola', 2),
(2, 'Hamburguesa', 5),
(3, 'Pizza', 8),
(4, 'Café', 2),
(5, 'Ensalada', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sells`
--

DROP TABLE IF EXISTS `sells`;
CREATE TABLE IF NOT EXISTS `sells` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreproducto` varchar(300) NOT NULL,
  `unidad` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sells`
--

INSERT INTO `sells` (`id`, `nombreproducto`, `unidad`) VALUES
(1, 'Coca Cola', 2),
(2, 'Hamburguesa', 1),
(3, 'Pizza', 3),
(4, 'Café', 1),
(5, 'Ensalada', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL,
  `username` varchar(300) NOT NULL,
  `age` int NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `age`, `password`, `role`) VALUES
(1, 'JuanPerez', 25, 'password123', 'Administrador'),
(6, 'AngieTorres', 20, 'pass1256', 'Mesero'),
(3, 'CarlosGarcia', 22, 'mypassword', 'Mesero'),
(4, 'AnaMartinez', 28, 'pass1234', 'Mesero'),
(5, 'LuisTorres', 35, 'luispass', 'Mesero');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
