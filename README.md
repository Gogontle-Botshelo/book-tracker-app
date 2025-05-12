# Book Tracker App
## Purpose
A SvelteKit application to track books, allowing users to add, view, and search for books with statuses (To Read, Reading, Completed).

## Implementation
Built using SvelteKit with SCSS for styling, Drizzle ORM for Turbo database management, and external APIs for book searching.

## Codebase Structure
- `src/routes/`: Contains pages (`/`, `/add`, `/search`).
- `src/lib/`: Includes components, schema, and database setup.
- `drizzle/`: Stores migration files.
- `src/app.css`: Global styles.

## APIs
- **Internal**: CRUD operations using Drizzle ORM on the Turbo `books` table.
- **External**: Google Books API (`https://www.googleapis.com/books/v1/volumes`) for searching books.

## Stored Data
SQLite database with a `books` table:
- `id` (integer, auto-increment, primary key)
- `title` (text, not null)
- `author` (text, not null)
- `status` (text, not null)
- `addedDate` (text, not null, default: current ISO date)

## Component Communication
- **Props**: Pass data between components (e.g., `BookCard` receives book data).
- **Stores**: Use `$page` store for navigation state.
- **Form Actions**: Handle form submissions via SvelteKit actions.

## External Modules
- `date-fns`: For date handling.
- `sveltekit-superforms`: For form management.
- `zod`: For form validation.