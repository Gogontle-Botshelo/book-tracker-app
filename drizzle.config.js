module.exports = {
	schema: './src/lib/schema.js',
	out: './drizzle',
	dialect: 'turso', //
	dbCredentials: {
		url: 'file:./turso.db', //
	},
};