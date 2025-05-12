// src/routes/add/+page.server.js
import { initializeBookForm, addBook } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	// Initialize empty form for the "Add Book" page
	return initializeBookForm();
};

export const actions = {
	default: async ({ request, locals }) => {
		const result = await addBook({
			request,
			db: locals.db
		});

		if (result.form.valid) {
			throw redirect(303, '/library'); // Redirect after successful submission
		}

		return result; // Return form with errors if validation fails
	}
};