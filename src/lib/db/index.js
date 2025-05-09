import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { books } from './schema';

const sqlite = new Database('sqlite.db');
// noinspection JSCheckFunctionSignatures
export const db = drizzle(sqlite, { schema: { books } });