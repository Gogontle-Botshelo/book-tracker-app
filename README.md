Book Tracker
Project Documentation
The Purpose of the Project
The Book Tracker is a web application developed in SvelteKit, its purpose is to allow users to manage a personal reading list by tracking books they have read, are currently reading, or want to read. 
The project demonstrates proficiency in web development, including building a multi-route application, integrating external APIs, managing data storage, and creating a modular UI with custom Svelte components.

The Implementation
The Book Tracker app was implemented using SvelteKit. Key features include:

Routing: The app has three routes:
/: Home page with a welcome message and navigation links.
/books: Displays the user’s book list with filtering by status and a delete option.
/add: Allows users to search for books and add them to the database.


Custom Components: Eight custom Svelte components ensure a modular UI:
Header: Navigation bar across all pages.
Footer: Displays credits at the bottom of each page.
BookCard: Renders individual book details with a Delete button.
BookList: Lists all books, handling deletion locally.
SearchForm: Form to search books via an external API.
BookForm: Form to add a book with status selection.
StatusFilter: Dropdown to filter books by status.
LoadingSpinner: Visual feedback during loading states.


Styling: SCSS (src/app.scss) provides responsive styling for a clean user interface.
API Integration:
External API calls to the Open Library API for book searches.
Internal API routes for managing books in the database.


Data Storage: SQLite (database.sqlite) stores book data, with SQL queries executed via the sqlite3 module.
Delete Feature: Added a Delete button to each book on the /books page, using an internal API endpoint with local state updates for instant UI feedback.

The Structure of the Code Structure
The project is organized into several key directories and files to maintain modularity and clarity:

The src/ directory contains the core application code. Inside src/lib/, the components/ subdirectory holds eight custom Svelte components used for the UI, 
while db.js manages the SQLite database setup with the sqlite3 module. The routes/ subdirectory defines the app’s pages and API endpoints: the root +page.svelte serves as 
the home page, books/ includes +page.svelte and +page.server.js for the book list, add/ includes +page.svelte and +page.server.js for adding books, and api/ contains API routes like books/+server.js for
searching books and book/[id]/+server.js for managing individual books. The app.scss file provides global SCSS styles, and app.html is the HTML template.
The static/ directory stores static assets, such as favicon.png for the browser favicon.
Configuration files include package.json and package-lock.json for dependencies, svelte.config.js for SvelteKit settings, and vite.config.js for Vite configuration.
The .gitignore file specifies ignored files, such as database.sqlite and .idea/, to exclude them from version control.
The README.md file in the root directory provides project documentation.

Description of APIs
The app uses both external and internal APIs to manage book data:

External API:
Open Library API: GET https://openlibrary.org/search.json?q=<query> retrieves book data based on a search query.


Internal APIs:
GET /api/books: Proxies the Open Library API to search books.
POST /api/books: Adds a book to the database with title, author, status, and date added.
PATCH /api/book/[id]: Updates a book’s status in the database.
DELETE /api/book/[id]: Removes a book from the database, used by the Delete button on the /books page.


Description of Stored Data
The app stores book data in a SQLite database (database.sqlite) with a single table:

Table: books
id: INTEGER, primary key, auto-incremented.
title: TEXT, required, stores the book’s title (e.g., “Pride and Prejudice”).
author: TEXT, optional, stores the book’s author (e.g., “Jane Austen”).
status: TEXT, required, indicates the reading status (“Read”, “Reading”, or “Want to Read”).
date_added: TEXT, required, ISO timestamp of when the book was added (e.g., “2025-05-22T15:00:00Z”).

Parent-Child Communication:
Components communicate via props. For example, BookList passes book data to BookCard using <BookCard {book} />.
BookCard uses a callback prop (onDelete) to notify BookList when a book is deleted, allowing BookList to update its local state.

Event Handling:
SearchForm and BookForm emit events (onSearch, onSubmit) to their parent components to trigger actions like searching the Open Library API or adding a book to the database.

Server Communication:
SvelteKit’s server routes (+page.server.js, +server.js) handle database operations and API requests.
Client-side components use fetch to interact with internal API routes (e.g., DELETE /api/book/[id] for deletion, POST /api/books for adding books).

At Least One External Node.js Module Used

date-fns: Used in BookCard.svelte for date formatting. It formats the date_added timestamp into a human-readable format (e.g., format(new Date(book.date_added), 'PPP') displays “May 22, 2025”).
Additional Module: sqlite3 is used for database operations, managing the SQLite database (database.sqlite) and executing SQL queries.

