Book Tracker
Purpose
The Book Tracker is a web application built with SvelteKit that allows users to track books they have read, are currently reading, or want to read. It demonstrates proficiency in web development, including routing, component-based architecture, API integration, and database management.
Implementation
The app uses SvelteKit for the frontend and backend. Key features include:

Routing: Three routes (/, /books, /add) for navigation.
Components: Eight custom Svelte components for modular UI.
API Calls: Integrates with Open Library API for book searches and internal APIs for CRUD operations.
Database: SQLite stores book data (title, author, status, date added).
Styling: SCSS for responsive design.
External Module: date-fns for date formatting.

Codebase Structure
book-tracker/
├── src/
│   ├── lib/
│   │   ├── components/        # Custom Svelte components
│   │   ├── db.js              # SQLite database setup
│   ├── routes/                # SvelteKit routes
│   ├── app.scss               # Global styles
├── static/                    # Static assets
├── database.sqlite            # SQLite database
├── README.md                  # Documentation

APIs

External: Open Library API (http://openlibrary.org/search.json) for searching books.
Internal:
GET /api/books: Search books via Open Library.
POST /api/books: Add a book to the database.
PATCH /api/book/[id]: Update book status.
DELETE /api/book/[id]: Delete a book.



Stored Data
The books table in SQLite has:

id: Auto-incremented primary key.
title: Book title (text, required).
author: Book author (text, optional).
status: Book status (text, e.g., "Read", "Reading", "Want to Read").
date_added: Date the book was added (ISO string).

Communication Between Components/Services

Parent-Child: Components like BookList pass books to BookCard via props.
Events: SearchForm and BookForm emit events to parent components.
Server Communication: SvelteKit’s server routes handle API requests, interacting with the SQLite database.

External Module
The date-fns library is used to format dates in BookCard.svelte for readable display (e.g., "May 21, 2025").
Setup Instructions

