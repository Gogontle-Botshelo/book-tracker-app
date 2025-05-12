import { initializeSearchForm } from '$lib/utils';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { searchSchema } from '$lib/formSchema';
import { searchGoogleBooks } from '$lib/api/googleBooks';

export const load = initializeSearchForm;

/**
 * Transforms API book data to consistent format
 */
const transformBookData = (items) => {
	return items?.map(item => ({
		id: item.id,
		title: item.volumeInfo?.title || 'Untitled',
		author: item.volumeInfo?.authors?.join(', ') || 'Unknown',
		// Add other fields you need consistently
		thumbnail: item.volumeInfo?.imageLinks?.thumbnail
	})) || [];
};

export const actions = {
	searchBooks: async ({ request }) => {
		const form = await superValidate(request, zod(searchSchema));
		if (!form.valid) return { form };

		try {
			const data = await searchGoogleBooks(form.data.query);
			return {
				form: { ...form, submitted: true },
				externalBooks: transformBookData(data.items)
			};
		} catch (error) {
			return {
				form: { ...form, submitted: true, error: error.message },
				externalBooks: []
			};
		}
	}
};