-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 24 Novembre 2016 à 15:15
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `minichat`
--

CREATE TABLE `minichat` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `minichat`
--

INSERT INTO `minichat` (`id`, `pseudo`, `message`, `date`) VALUES
(3, 'Alex', 'test', '2016-11-24 14:49:14'),
(4, 'Alex', 'test', '2016-11-24 14:50:10'),
(5, 'Alex', 'test', '2016-11-24 14:51:14'),
(6, 'Alex', 'test', '2016-11-24 14:59:43'),
(7, 'Alex', 'Test', '2016-11-24 15:12:15'),
(8, 'Alex', 'test encore', '2016-11-24 15:16:03'),
(9, 'Alex', 'encore un test', '2016-11-24 15:16:34'),
(10, 'Alex', 'test', '2016-11-24 15:42:58'),
(11, 'Alex', 'Test', '2016-11-24 15:44:08'),
(12, 'Alex', 'J\'envoie plein de messages', '2016-11-24 15:44:18'),
(13, 'Alex', 'encore 1', '2016-11-24 15:44:25'),
(14, 'Alex', 'et 2', '2016-11-24 15:44:28'),
(15, 'Alex', 'alex', '2016-11-24 15:50:24'),
(16, 'Alex', 'test', '2016-11-24 16:11:23'),
(17, 'Alex', 'encore', '2016-11-24 16:13:57'),
(18, 'Francky', 'Vas-y francky c\'est bon', '2016-11-24 16:14:55');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `minichat`
--
ALTER TABLE `minichat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `minichat`
--
ALTER TABLE `minichat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
