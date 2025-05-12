import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { books } from './schema.js';

const client = createClient({
	url: 'file:./turso.db', // Local file-based database
});

export const db = drizzle(client, { schema: { books } });