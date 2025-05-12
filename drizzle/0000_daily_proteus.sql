CREATE TABLE `books` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`status` text NOT NULL,
	`added_date` text DEFAULT '2025-05-11T21:30:51.706Z' NOT NULL
);
