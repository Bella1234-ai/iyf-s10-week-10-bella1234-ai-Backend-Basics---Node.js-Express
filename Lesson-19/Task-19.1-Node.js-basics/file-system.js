// fs - File System
const fs = require('fs');

// Read file (synchronous)
const content = fs.readFileSync('hello.js', 'utf-8');
console.log('--- Sync read ---');
console.log(content);

// Read file (asynchronous - preferred)
fs.readFile('hello.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('--- Async read ---');
    console.log(data);
});

// Write file
fs.writeFileSync('output.txt', 'Hello, World!');
console.log('File written successfully!');

// path - Path utilities
const path = require('path');
console.log('Joined path:', path.join(__dirname, 'files', 'data.json'));
console.log('Extension:', path.extname('photo.jpg'));  // .jpg
