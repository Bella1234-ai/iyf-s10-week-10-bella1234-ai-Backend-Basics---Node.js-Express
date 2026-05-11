# Week 10: Backend Basics - Node.js & Express

## Author
- **Name:** ISABELLA SIMIYU
- **GitHub:** [@bella1234](https://github.com/bella1234)
- **Date:** 09/05/2026

## Project Description
This project is my first backend server built with Node.js and Express. It includes the CommunityHub API with full CRUD operations for posts and users, middleware for logging and validation, error handling, and environment variable configuration. The project also contains completed exercises for Lesson 19 (Node.js basics, Express setup, request/response handling) and Lesson 20 (middleware, error handling, code organization, and environment variables).

## Technologies Used
- Node.js
- Express.js
- JavaScript (ES5/CommonJS)
- dotenv
- Postman / Thunder Client (for API testing)

## Features
- Node.js basics (hello script, file system, built-in modules)
- Express server setup with routes
- Request & response handling (text, JSON, status codes, redirects)
- Route parameters and query strings
- CommunityHub API with full CRUD operations for Posts and Users
- Middleware (logger, request time, auth check, validation)
- Error handling with custom ApiError class
- Modular project structure (routes, controllers, middleware, data)
- Environment variables with dotenv

## How to Run
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the CommunityHub API server
4. Run `npm run dev` to start with file watching (auto-restart on changes)
5. Test the API using Postman or Thunder Client:
   - `GET http://localhost:3000/api/health` - Health check
   - `GET http://localhost:3000/api/posts` - Get all posts
   - `GET http://localhost:3000/api/posts/1` - Get single post
   - `POST http://localhost:3000/api/posts` - Create post (JSON body)
   - `PUT http://localhost:3000/api/posts/1` - Update post
   - `DELETE http://localhost:3000/api/posts/1` - Delete post
   - `PATCH http://localhost:3000/api/posts/1/like` - Like a post

## Project Structure
```
week-10/
├── src/
│   ├── routes/
│   │   ├── posts.js
│   │   ├── users.js
│   │   └── index.js
│   ├── middleware/
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   │   └── validate.js
│   ├── controllers/
│   │   ├── postsController.js
│   │   └── usersController.js
│   ├── data/
│   │   └── store.js
│   └── app.js
├── server.js
├── package.json
├── .env
├── .env.example
├── .gitignore
├── Lesson-19/
│   ├── Task-19.1-Node.js-basics/
│   ├── Task-19.2-Express-setup/
│   ├── Task-19.3-Request-Response/
│   └── Task-19.4-Posts-API/
├── Lesson-20/
│   ├── Task-20.1-Middleware/
│   ├── Task-20.2-Error-Handling/
│   └── Task-20.4-Environment-Variables/
└── README.md
```

## Lessons Learned
- Learned how **Node.js** runs JavaScript outside the browser and provides access to the file system, environment variables, and command-line arguments through built-in modules like `fs` and `path`.
- Understood how **Express.js** simplifies building web servers by providing a clean routing system and middleware support.
- Practiced handling different types of **requests and responses** including JSON, text, status codes, route parameters, and query strings.
- Built a complete **RESTful API** with full CRUD operations using in-memory data storage.
- Learned the importance of **middleware** for cross-cutting concerns like logging, authentication checks, and request validation.
- Implemented **error handling middleware** to catch and format errors consistently across the API.
- Understood how to **organize code modularly** by separating routes, controllers, middleware, and data into different files and folders.
- Learned to use **environment variables** with `dotenv` to keep sensitive configuration out of the codebase.

## Challenges Faced
- **Middleware order matters:** Initially placed the error handling middleware before the routes, which meant errors were not being caught. Solved by moving it to the very end of the middleware stack.
- **Parsing JSON request bodies:** Forgot to add `app.use(express.json())` and spent time debugging why `req.body` was undefined in POST requests. Solved by adding the JSON body parser middleware at the top of the app.
- **Module exports confusion:** Struggled with exporting multiple items from a file using `module.exports` versus `exports`. Solved by consistently using `module.exports = { ... }` for multiple exports.
- **404 handler vs error handler:** The 404 route handler was catching all unmatched routes, but I initially placed it after the error handler, causing unexpected behavior. Solved by placing the 404 handler before the error handling middleware.
- **In-memory data persistence:** Since the data store is in memory, restarting the server resets all data. Understood that this is expected for this learning exercise and that a real database would be needed for production.


