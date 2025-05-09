# Book Tracker App

## Purpose
The Book Tracker App is a web application built for the Web Programming II project to help users manage their reading lists. Users can add books, search for books using the Google Books API, and filter books by reading status (Read, Reading, Want to Read). The app uses SvelteKit for a responsive UI, SQLite for data storage, and Drizzle ORM for database management.

## Implementation
- **Framework**: SvelteKit for server-side rendering and routing.
- **Database**: SQLite with Drizzle ORM for storing book data (title, author, status, added date).
- **External API**: Google Books API for searching books.
- **Validation**: Zod and SvelteKit Superforms for form validation.
- **Date Formatting**: `date-fns` for formatting added dates.
- **Components**: Eight Svelte components for modular UI.
- **API Calls**: Four API calls (CRUD operations and search).
- **Styling**: SCSS for a clean, responsive design.

## Codebase Structure
- `src/lib/components/`: Eight Svelte components (`BookCard`, `BookList`, `SearchBar`, `AddBookForm`, `Navbar`, `Footer`, `StatusFilter`, `LoadingSpinner`).
- `src/lib/db/`: Database setup (`schema.js`, `index.js`).
- `src/routes/`: Three routes (`/`, `/search`, `/add`) and an API route (`/api/search`).
- `drizzle/`: Migration files for SQLite.
- `drizzle.config.js`: Drizzle ORM configuration.
- `sqlite.db`: SQLite database file.

## APIs
- **Google Books API**: Fetches b- **Google Books API**: Fetches b- **Google Books API**: Fetche **Internal APIs**:
  - `POST /add`: Adds a book to the database.
  - `GET /`: Retrieves books for the home page.
  - `GET /api/search`: Proxies Google Books API.

## Stored Data
- **Books Table**:
  - `id`: Integer, auto-incrementing primary key.
  - `title`: Text, book title (required).
  - `author`: Text, book author (required).
  - `status`: Text, enum (read, reading, want_to_read).
  - `addedDate`: Text, date added (formatted with `date-fns`).

## Compon## Compon## Compon#cation
- **Components**:
  - `Navbar`: Navigation links to routes.
  - `Footer`: Static footer with project info.
  - `BookCard`: Displays individual book detai  - `BookCard`: Displays individual book detai  - `BookCnts.
  - `SearchBar`: Input for Google Books API search.
  - `AddBookForm`: Form for adding   - `AddBookForm`: Form for adding   -er`: Dropdown to filter books by status.
  - `LoadingS  - `LoadingS  - `LoadingS  - `.
- **Services**:
  - Database operations via `src/lib/db/index.js`.
  - API calls via SvelteKit server routes.

## External Module## External Module## External Module## ate` in `src/routes/add/+page.server.js` (e.g., `yyyy-MM-dd`).

## Setup Instructions
1. Clone the repository: `git clone git@github.com:Gogontle/book-tracker-app.git`
2. Install dependencies: `npm install`
3. Generate migrations: `npx drizzle-kit generate`
4. Apply migrations: `npm run migrate`
5. Run the development server: `npm run dev`
6. Open `http://localhost:5173` in your browser. 
