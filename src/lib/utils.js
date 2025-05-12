// src/lib/utils.js
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { searchSchema, bookSchema } from './formSchema'; // Keep both schemas
import { books } from './schema';

// Search form initialization (used in search page)
export const initializeSearchForm = async () => {
	return {
		form: await superValidate(zod(searchSchema))
	};
};

// Book form initialization (used in add/edit pages)
export const initializeBookForm = async () => {
	return {
		form: await superValidate(
			{
				title: '',
				author: '',
				status: 'unread'
			},
			zod(bookSchema)
		)
	};
};

// Book submission (used in form actions)
export const addBook = async ({ request, db }) => {
	const form = await superValidate(request, zod(bookSchema));
	if (!form.valid) return { form };

	await db.insert(books).values({
		title: form.data.title,
		author: form.data.author,
		status: form.data.status,
		addedDate: new Date().toISOString()
	});

	return { form };
};