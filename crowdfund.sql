-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2025 at 10:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crowdfund`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `story` longtext NOT NULL,
  `category` varchar(64) NOT NULL,
  `imageUrl` varchar(500) NOT NULL,
  `targetAmount` bigint(20) NOT NULL,
  `currentAmount` bigint(20) NOT NULL,
  `donorCount` int(11) NOT NULL DEFAULT 0,
  `daysRemaining` int(11) NOT NULL DEFAULT 0,
  `endDate` datetime NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `status` varchar(32) NOT NULL DEFAULT 'active',
  `isVerified` tinyint(4) NOT NULL DEFAULT 0,
  `isUrgent` tinyint(4) NOT NULL DEFAULT 0,
  `organizerId` varchar(36) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `title`, `slug`, `description`, `story`, `category`, `imageUrl`, `targetAmount`, `currentAmount`, `donorCount`, `daysRemaining`, `endDate`, `createdAt`, `status`, `isVerified`, `isUrgent`, `organizerId`, `images`) VALUES
('559bfe95-6fe8-4f9f-b12f-0055f865879b', 'Operasi Katarak untuk 100 Lansia', 'operasi-katarak-100-lansia', 'Program operasi katarak gratis untuk lansia kurang mampu agar mereka bisa melihat kembali dengan jelas.', 'Yayasan Mata Sehat Indonesia mengadakan program operasi katarak gratis untuk 100 lansia kurang mampu.', 'kesehatan', 'https://picsum.photos/seed/cataract1/800/600', 500000000, 125000000, 856, 60, '2026-01-24 15:03:35', '2025-11-15 15:03:35.791000', 'active', 1, 0, 'c417410c-1407-408c-840d-730a1ae670c6', NULL),
('612c93c4-0f2e-4ad8-95cc-57eca5405995', 'Pelestarian Hutan Mangrove', 'pelestarian-hutan-mangrove', 'Program penanaman dan pelestarian hutan mangrove untuk melindungi pesisir dan ekosistem laut.', 'Mari bergabung dalam program pelestarian hutan mangrove di pesisir Jawa Timur!', 'lingkungan', 'https://picsum.photos/seed/mangrove1/800/600', 2500000000, 450000000, 2847, 90, '2026-02-23 15:03:35', '2025-10-31 15:03:35.801000', 'active', 1, 0, 'e7393e68-ba17-4be8-b5db-b46da6ac7643', NULL),
('7b53ae55-2b32-4878-a7b5-aba82336f487', 'Bantuan Darurat Korban Banjir Bandang', 'bantuan-korban-banjir-bandang', 'Ribuan keluarga kehilangan rumah dan harta benda akibat banjir bandang. Mari kita bantu mereka untuk bangkit kembali.', 'Banjir bandang yang melanda Kabupaten Sukabumi telah menyebabkan ribuan keluarga kehilangan tempat tinggal.', 'bencana-alam', 'https://picsum.photos/seed/flood1/800/600', 300000000, 245000000, 3421, 20, '2025-12-15 15:03:35', '2025-11-20 15:03:35.787000', 'active', 1, 1, 'ece1c28f-7564-44bf-a3fc-81b36b557273', NULL),
('7b89e0db-881b-4d91-929a-b1674839cd5b', 'Bangun Sekolah untuk Anak-anak Desa Terpencil', 'bangun-sekolah-anak-desa-terpencil', 'Mari bersama membangun sekolah untuk anak-anak di desa terpencil agar mereka bisa mendapatkan pendidikan yang layak.', 'Yayasan Pendidikan Nusantara mengajak Anda untuk berpartisipasi dalam pembangunan sekolah di Desa Sukamakmur, Papua.', 'pendidikan', 'https://picsum.photos/seed/school1/800/600', 500000000, 325000000, 2156, 45, '2026-01-09 15:03:35', '2025-11-05 15:03:35.782000', 'active', 1, 0, 'e5c1f36e-eb7a-4cc5-a059-9605ae095bb2', NULL),
('830094d2-b1d0-4ffc-b6eb-d88836875c28', 'Beasiswa untuk Anak Yatim Berprestasi', 'beasiswa-anak-yatim-berprestasi', 'Berikan kesempatan anak yatim berprestasi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.', 'Program beasiswa untuk 50 anak yatim berprestasi yang ingin melanjutkan pendidikan ke SMA/SMK.', 'pendidikan', 'https://picsum.photos/seed/scholarship1/800/600', 500000000, 180000000, 1024, 30, '2025-12-25 15:03:35', '2025-11-10 15:03:35.797000', 'active', 1, 0, 'f587254a-aef7-4736-aa91-6b33273a2ea8', NULL),
('871d43ba-86e1-4e9b-bb51-47cb722fd5d3', 'Bantu Ibu Siti Operasi Jantung', 'bantu-ibu-siti-operasi-jantung', 'Ibu Siti membutuhkan bantuan untuk operasi jantung yang mendesak. Mari kita bantu beliau untuk mendapatkan kesempatan hidup yang lebih baik.', 'Assalamualaikum warahmatullahi wabarakatuh,\n\nPerkenalkan, saya Budi, anak dari Ibu Siti yang saat ini sedang membutuhkan bantuan untuk operasi jantung. Ibu saya didiagnosis mengalami penyakit jantung koroner yang membutuhkan operasi bypass segera.\n\nKondisi ibu semakin memburuk dalam beberapa bulan terakhir. Biaya operasi mencapai Rp 150.000.000. Sebagai keluarga sederhana, kami sudah berusaha mengumpulkan dana namun masih jauh dari cukup.', 'kesehatan', 'https://picsum.photos/seed/health1/800/600', 150000000, 87500000, 1247, 15, '2025-12-10 15:03:35', '2025-10-26 15:03:35.727000', 'active', 1, 1, '28cbb6ae-51fb-4abe-a577-b24d168f077d', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `campaign_updates`
--

CREATE TABLE `campaign_updates` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `campaignId` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `campaign_updates`
--

INSERT INTO `campaign_updates` (`id`, `title`, `content`, `imageUrl`, `createdAt`, `campaignId`) VALUES
('2696ec0e-8859-40c4-b675-ea04d529b4af', 'Update Kondisi Ibu Siti', 'Alhamdulillah, kondisi ibu sudah semakin membaik. Dokter sudah menjadwalkan operasi untuk minggu depan. Terima kasih untuk semua yang sudah membantu!', NULL, '2025-11-22 15:03:35.770000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3'),
('61876464-f395-467e-bcf4-c4434fb69916', 'Terima Kasih Para Donatur', 'Kami sekeluarga mengucapkan terima kasih yang sebesar-besarnya kepada semua donatur yang sudah membantu. Dana yang terkumpul sudah mencapai 58% dari target. Mari kita terus berjuang bersama!', 'https://picsum.photos/seed/update1/800/600', '2025-11-18 15:03:35.774000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` varchar(36) NOT NULL,
  `donorName` varchar(255) NOT NULL,
  `amount` bigint(20) NOT NULL,
  `message` text DEFAULT NULL,
  `isAnonymous` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `campaignId` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`id`, `donorName`, `amount`, `message`, `isAnonymous`, `createdAt`, `campaignId`) VALUES
('39989b65-4f27-46f5-8b7d-5bfdae79a614', 'Hamba Allah', 500000, 'Semoga Ibu Siti cepat sembuh. Aamiin.', 1, '2025-11-25 13:03:35.734000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3'),
('5e7377d4-d2c9-4787-8283-5dfb6f1769cf', 'Orang Baik', 2000000, NULL, 1, '2025-11-25 03:03:35.763000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3'),
('622edbc5-3287-4bdb-aeb8-8165a2a3abcb', 'Ahmad Rizki', 1000000, 'Semoga operasinya lancar dan ibu cepat pulih', 0, '2025-11-25 10:03:35.748000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3'),
('8fdf1f64-89dc-4f63-b525-3efb11b8f982', 'Budi Santoso', 500000, 'Semangat! Semoga lekas sembuh', 0, '2025-11-24 15:03:35.767000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3'),
('afdd01ab-5a59-4f11-9738-93bf9580648f', 'Siti Nurhaliza', 250000, 'Ikut membantu, semoga berkah', 0, '2025-11-25 07:03:35.760000', '871d43ba-86e1-4e9b-bb51-47cb722fd5d3');

-- --------------------------------------------------------

--
-- Table structure for table `organizers`
--

CREATE TABLE `organizers` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `avatarUrl` varchar(500) DEFAULT NULL,
  `isVerified` tinyint(4) NOT NULL DEFAULT 0,
  `type` varchar(32) NOT NULL DEFAULT 'individual',
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organizers`
--

INSERT INTO `organizers` (`id`, `name`, `avatarUrl`, `isVerified`, `type`, `description`) VALUES
('28cbb6ae-51fb-4abe-a577-b24d168f077d', 'Budi Santoso', 'https://ui-avatars.com/api/?name=Budi+Santoso&background=22c55e&color=fff&size=100', 1, 'individual', NULL),
('c417410c-1407-408c-840d-730a1ae670c6', 'Yayasan Mata Sehat Indonesia', 'https://ui-avatars.com/api/?name=Yayasan+Mata&background=f59e0b&color=fff&size=100', 1, 'organization', NULL),
('e5c1f36e-eb7a-4cc5-a059-9605ae095bb2', 'Yayasan Pendidikan Nusantara', 'https://ui-avatars.com/api/?name=Yayasan+Pendidikan&background=3b82f6&color=fff&size=100', 1, 'organization', 'Yayasan yang fokus pada pendidikan anak-anak di daerah terpencil'),
('e7393e68-ba17-4be8-b5db-b46da6ac7643', 'Yayasan Hijau Indonesia', 'https://ui-avatars.com/api/?name=Yayasan+Hijau&background=10b981&color=fff&size=100', 1, 'organization', NULL),
('ece1c28f-7564-44bf-a3fc-81b36b557273', 'Tim Relawan Bencana Indonesia', 'https://ui-avatars.com/api/?name=Tim+Relawan&background=ef4444&color=fff&size=100', 1, 'organization', NULL),
('f587254a-aef7-4736-aa91-6b33273a2ea8', 'Yayasan Peduli Anak Yatim', 'https://ui-avatars.com/api/?name=Yayasan+Anak&background=8b5cf6&color=fff&size=100', 1, 'organization', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_a0d1755d181035fa13ffb64307` (`slug`),
  ADD KEY `FK_97d09b4c976b5080475c7fdf180` (`organizerId`);

--
-- Indexes for table `campaign_updates`
--
ALTER TABLE `campaign_updates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_dce45a84508ba5fd75e35d6f2a4` (`campaignId`);

--
-- Indexes for table `organizers`
--
ALTER TABLE `organizers`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD CONSTRAINT `FK_97d09b4c976b5080475c7fdf180` FOREIGN KEY (`organizerId`) REFERENCES `organizers` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
