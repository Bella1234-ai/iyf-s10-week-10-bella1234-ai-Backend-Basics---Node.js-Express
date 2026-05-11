// In-memory data store for CommunityHub API
let posts = [
    {
        id: 1,
        title: "Getting Started with Node.js",
        content: "Node.js is a JavaScript runtime that allows you to run JavaScript on the server. It's built on Chrome's V8 engine and uses an event-driven, non-blocking I/O model.",
        author: "John Doe",
        createdAt: "2026-01-15T10:00:00Z",
        updatedAt: null,
        likes: 10
    },
    {
        id: 2,
        title: "Express.js Fundamentals",
        content: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        author: "Jane Smith",
        createdAt: "2026-01-16T14:30:00Z",
        updatedAt: null,
        likes: 15
    },
    {
        id: 3,
        title: "Building RESTful APIs",
        content: "REST (Representational State Transfer) is an architectural style that defines a set of constraints to be used for creating web services.",
        author: "Alice Johnson",
        createdAt: "2026-01-17T09:15:00Z",
        updatedAt: null,
        likes: 8
    }
];

let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        username: "johndoe",
        createdAt: "2026-01-10T08:00:00Z"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        username: "janesmith",
        createdAt: "2026-01-11T10:30:00Z"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        username: "alicej",
        createdAt: "2026-01-12T14:00:00Z"
    }
];

let nextPostId = 4;
let nextUserId = 4;

module.exports = {
    posts,
    users,
    nextPostId,
    nextUserId
};
