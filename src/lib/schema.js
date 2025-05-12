import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const books = sqliteTable('books', {
	id: integer('id', { autoIncrement: true }).primaryKey(),
	title: text('title').notNull(),
	author: text('author').notNull(),
	status: text('status').notNull(),
	addedDate: text('added_date').notNull().default(new Date().toISOString())
});

