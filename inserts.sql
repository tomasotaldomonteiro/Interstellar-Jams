-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: interstellar_jams
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,0,0,1,1),(2,1,0,1,1),(3,2,0,1,1),(4,3,0,1,1),(5,4,0,1,1),(6,0,1,5,1),(7,1,1,1,1),(8,2,1,1,1),(9,3,1,1,1),(10,4,1,1,1),(11,0,2,1,1),(12,1,2,1,1),(13,2,2,1,1),(14,3,2,1,1),(15,4,2,1,1),(16,0,3,1,1),(17,1,3,1,1),(18,2,3,1,1),(19,3,3,1,1),(20,4,3,1,1),(21,0,4,1,1),(22,1,4,1,1),(23,2,4,1,1),(24,3,4,1,1),(25,4,4,1,1);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `boardmatch`
--

LOCK TABLES `boardmatch` WRITE;
/*!40000 ALTER TABLE `boardmatch` DISABLE KEYS */;
INSERT INTO `boardmatch` VALUES (1,1,1,0),(1,2,1,0),(1,3,1,0),(1,4,1,0),(1,5,1,0),(1,6,1,0),(1,7,1,0),(1,8,1,0),(1,9,1,0),(1,10,1,0),(1,11,1,0),(1,12,1,0),(1,13,1,0),(1,14,1,0),(1,15,1,0),(1,16,1,0),(1,17,1,0),(1,18,1,0),(1,19,1,0),(1,20,1,0),(1,21,1,0),(1,22,1,0),(1,23,1,0),(1,24,1,0),(1,25,1,0);
/*!40000 ALTER TABLE `boardmatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cassette`
--

LOCK TABLES `cassette` WRITE;
/*!40000 ALTER TABLE `cassette` DISABLE KEYS */;
INSERT INTO `cassette` VALUES (1,'Meteor',1,3),(2,'BlackHole',1,3),(3,'WormHole',1,6);
/*!40000 ALTER TABLE `cassette` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cassettetype`
--

LOCK TABLES `cassettetype` WRITE;
/*!40000 ALTER TABLE `cassettetype` DISABLE KEYS */;
INSERT INTO `cassettetype` VALUES (1,'placables'),(2,'controlables'),(3,'blockables');
/*!40000 ALTER TABLE `cassettetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `gamematch`
--

LOCK TABLES `gamematch` WRITE;
/*!40000 ALTER TABLE `gamematch` DISABLE KEYS */;
INSERT INTO `gamematch` VALUES (1,2,0,1,2);
/*!40000 ALTER TABLE `gamematch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hazard`
--

LOCK TABLES `hazard` WRITE;
/*!40000 ALTER TABLE `hazard` DISABLE KEYS */;
INSERT INTO `hazard` VALUES (1,'Meteor',3,1),(2,'BlackHole',3,2),(3,'WormHole',6,3);
/*!40000 ALTER TABLE `hazard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `map`
--

LOCK TABLES `map` WRITE;
/*!40000 ALTER TABLE `map` DISABLE KEYS */;
INSERT INTO `map` VALUES (1,'between the stars');
/*!40000 ALTER TABLE `map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `matchstate`
--

LOCK TABLES `matchstate` WRITE;
/*!40000 ALTER TABLE `matchstate` DISABLE KEYS */;
/*!40000 ALTER TABLE `matchstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'Valter',0,0),(2,'Tomas',0,0),(3,'Tima',0,0),(6,'123',0,0);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `playermatch`
--

LOCK TABLES `playermatch` WRITE;
/*!40000 ALTER TABLE `playermatch` DISABLE KEYS */;
INSERT INTO `playermatch` VALUES (1,1,2,2,1,0,1),(2,1,1,1,1,0,0);
/*!40000 ALTER TABLE `playermatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `playermatchcassette`
--

LOCK TABLES `playermatchcassette` WRITE;
/*!40000 ALTER TABLE `playermatchcassette` DISABLE KEYS */;
INSERT INTO `playermatchcassette` VALUES (1,1,0),(2,1,0);
/*!40000 ALTER TABLE `playermatchcassette` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tiletype`
--

LOCK TABLES `tiletype` WRITE;
/*!40000 ALTER TABLE `tiletype` DISABLE KEYS */;
INSERT INTO `tiletype` VALUES (1,'empty'),(2,'meteor'),(3,'blackhole'),(4,'wormhole'),(5,'player1'),(6,'player2');
/*!40000 ALTER TABLE `tiletype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 23:02:13
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: b'interstellar_jams'
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 23:02:13
