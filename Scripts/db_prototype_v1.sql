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
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `tile_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tile_position_x` bigint NOT NULL,
  `tile_position_y` bigint NOT NULL,
  `tile_type_id` bigint NOT NULL,
  `map_id` bigint NOT NULL,
  PRIMARY KEY (`tile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,0,0,1,1),(2,1,0,1,1),(3,2,0,1,1),(4,3,0,1,1),(5,4,0,1,1),(6,0,1,5,1),(7,1,1,1,1),(8,2,1,1,1),(9,3,1,1,1),(10,4,1,1,1),(11,0,2,1,1),(12,1,2,1,1),(13,2,2,1,1),(14,3,2,1,1),(15,4,2,1,1),(16,0,3,1,1),(17,1,3,1,1),(18,2,3,1,1),(19,3,3,1,1),(20,4,3,1,1),(21,0,4,1,1),(22,1,4,1,1),(23,2,4,1,1),(24,3,4,1,1),(25,4,4,1,1);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardmatch`
--

DROP TABLE IF EXISTS `boardmatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardmatch` (
  `match_id` bigint unsigned NOT NULL,
  `tile_id` bigint NOT NULL,
  `tile_type_id` bigint NOT NULL,
  `hazard_duration` bigint NOT NULL,
  PRIMARY KEY (`tile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardmatch`
--

LOCK TABLES `boardmatch` WRITE;
/*!40000 ALTER TABLE `boardmatch` DISABLE KEYS */;
INSERT INTO `boardmatch` VALUES (1,1,1,0),(1,2,1,0),(1,3,1,0),(1,4,1,0),(1,5,1,0),(1,6,1,0),(1,7,1,0),(1,8,1,0),(1,9,1,0),(1,10,1,0),(1,11,1,0),(1,12,1,0),(1,13,1,0),(1,14,1,0),(1,15,1,0),(1,16,1,0),(1,17,1,0),(1,18,1,0),(1,19,1,0),(1,20,1,0),(1,21,1,0),(1,22,1,0),(1,23,1,0),(1,24,1,0),(1,25,1,0);
/*!40000 ALTER TABLE `boardmatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cassette`
--

DROP TABLE IF EXISTS `cassette`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cassette` (
  `cassette_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cassette_name` char(255) NOT NULL,
  `cassette_type_id` bigint NOT NULL,
  `cassette_turn_effect` bigint NOT NULL,
  PRIMARY KEY (`cassette_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cassette`
--

LOCK TABLES `cassette` WRITE;
/*!40000 ALTER TABLE `cassette` DISABLE KEYS */;
INSERT INTO `cassette` VALUES (1,'Meteor',1,3),(2,'BlackHole',1,3),(3,'WormHole',1,6);
/*!40000 ALTER TABLE `cassette` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cassettetype`
--

DROP TABLE IF EXISTS `cassettetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cassettetype` (
  `cassette_type_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cassette_type_name` char(255) NOT NULL,
  PRIMARY KEY (`cassette_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cassettetype`
--

LOCK TABLES `cassettetype` WRITE;
/*!40000 ALTER TABLE `cassettetype` DISABLE KEYS */;
INSERT INTO `cassettetype` VALUES (1,'placables'),(2,'controlables'),(3,'blockables');
/*!40000 ALTER TABLE `cassettetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gamematch`
--

DROP TABLE IF EXISTS `gamematch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gamematch` (
  `match_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `match_turn` bigint NOT NULL,
  `match_state_id` bigint NOT NULL,
  `match_map_id` bigint NOT NULL,
  `current_player` int DEFAULT '1',
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamematch`
--

LOCK TABLES `gamematch` WRITE;
/*!40000 ALTER TABLE `gamematch` DISABLE KEYS */;
INSERT INTO `gamematch` VALUES (1,2,0,1,2);
/*!40000 ALTER TABLE `gamematch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hazard`
--

DROP TABLE IF EXISTS `hazard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hazard` (
  `hazard_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `hazard_name` char(255) NOT NULL,
  `hazard_duration` bigint NOT NULL,
  `tile_id` bigint NOT NULL,
  PRIMARY KEY (`hazard_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hazard`
--

LOCK TABLES `hazard` WRITE;
/*!40000 ALTER TABLE `hazard` DISABLE KEYS */;
INSERT INTO `hazard` VALUES (1,'Meteor',3,1),(2,'BlackHole',3,2),(3,'WormHole',6,3);
/*!40000 ALTER TABLE `hazard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `map`
--

DROP TABLE IF EXISTS `map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `map` (
  `map_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `map_name` char(255) NOT NULL,
  PRIMARY KEY (`map_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `map`
--

LOCK TABLES `map` WRITE;
/*!40000 ALTER TABLE `map` DISABLE KEYS */;
INSERT INTO `map` VALUES (1,'between the stars');
/*!40000 ALTER TABLE `map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchstate`
--

DROP TABLE IF EXISTS `matchstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matchstate` (
  `match_state_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `match_state_name` char(255) NOT NULL,
  PRIMARY KEY (`match_state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchstate`
--

LOCK TABLES `matchstate` WRITE;
/*!40000 ALTER TABLE `matchstate` DISABLE KEYS */;
/*!40000 ALTER TABLE `matchstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `player_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `player_name` char(255) NOT NULL,
  `player_wins` bigint NOT NULL,
  `player_matches` bigint NOT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'Valter',0,0),(2,'Tomas',0,0),(3,'Tima',0,0),(6,'123',0,0);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playermatch`
--

DROP TABLE IF EXISTS `playermatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playermatch` (
  `player_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `match_id` bigint NOT NULL,
  `tile_id` bigint NOT NULL,
  `player_match_idle_turns` bigint NOT NULL,
  `player_cassette_id` bigint NOT NULL,
  `player_hazard_duration` bigint NOT NULL,
  `has_moved` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playermatch`
--

LOCK TABLES `playermatch` WRITE;
/*!40000 ALTER TABLE `playermatch` DISABLE KEYS */;
INSERT INTO `playermatch` VALUES (1,1,2,2,1,0,1),(2,1,1,1,1,0,0);
/*!40000 ALTER TABLE `playermatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playermatchcassette`
--

DROP TABLE IF EXISTS `playermatchcassette`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playermatchcassette` (
  `player_cassette_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `player_id` bigint NOT NULL,
  `cassette_id` bigint NOT NULL,
  PRIMARY KEY (`player_cassette_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playermatchcassette`
--

LOCK TABLES `playermatchcassette` WRITE;
/*!40000 ALTER TABLE `playermatchcassette` DISABLE KEYS */;
INSERT INTO `playermatchcassette` VALUES (1,1,0),(2,1,0);
/*!40000 ALTER TABLE `playermatchcassette` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiletype`
--

DROP TABLE IF EXISTS `tiletype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiletype` (
  `tile_type_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tile_type_name` char(255) NOT NULL,
  PRIMARY KEY (`tile_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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

-- Dump completed on 2024-05-14 22:35:51
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

-- Dump completed on 2024-05-14 22:35:51
