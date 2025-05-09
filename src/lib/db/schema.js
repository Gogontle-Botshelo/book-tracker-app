import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// noinspection JSUnusedGlobalSymbols
export const books = sqliteTable('books', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	author: text('author').notNull(),
	status: text('status', { enum: ['read', 'reading', 'want_to_read'] }).notNull(),
	addedDate: text('addedDate').notNull()
});