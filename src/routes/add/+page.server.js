import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { db } from '$lib/db';
import { books } from '$lib/db/schema';
import { format } from 'date-fns';

const schema = z.object({
	title: z.string().min(1, 'Title is required'),
	author: z.string().min(1, 'Author is required'),
	status: z.enum(['read', 'reading', 'want_to_read'])
});

export const load = async () => {
	const form = await superValidate(zod(schema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { form });
		}
		await db.insert(books).values({
			'addedDate': format(new Date(), 'yyyy-MM-dd'),
			'author': form.data.author,
			'status': form.data.status,
			'title': form.data.title
		});
		return { form, success: true };
	}
};