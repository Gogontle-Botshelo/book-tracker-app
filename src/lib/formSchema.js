// src/lib/formSchemas.js
import { z } from 'zod';

export const searchSchema = z.object({
	query: z.string().min(1, "Search cannot be empty") // Must have 'query' field
});

export const bookSchema = z.object({
	title: z.string().min(1, "Title is required"),
	author: z.string().min(1, "Author is required"),
	status: z.enum(['unread', 'reading', 'finished'])
});