// src/lib/api/googleBooks.js
export const searchGoogleBooks = async (query) => {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
	);
	if (!response.ok) throw new Error(`API request failed: ${response.status}`);
	return response.json();

	// Temporary test - remove after verification
	console.log('Module loaded');
	if (import.meta.vitest) {
		searchGoogleBooks('test').then(console.log).catch(console.error);
	}
};