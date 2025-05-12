import { sveltekit } from '@sveltejs/kit/vite';

export default {
	plugins: [sveltekit()],
	server: {
		hmr: {
			overlay: false, // Disable the overlay for warnings
		},
	},
};