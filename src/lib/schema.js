import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const books = sqliteTable('books', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	author: text('author').notNull(),
	status: text('status').notNull(), // Removed { enum: [...] }
	addedDate: text('added_date').notNull().default(new Date().toISOString())
});