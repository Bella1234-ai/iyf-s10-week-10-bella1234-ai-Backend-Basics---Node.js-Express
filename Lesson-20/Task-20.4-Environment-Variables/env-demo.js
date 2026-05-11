require('dotenv').config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const API_KEY = process.env.API_KEY;

console.log(`Running in ${NODE_ENV} mode`);
console.log(`Server will run on port: ${PORT}`);
console.log(`API Key is set: ${API_KEY ? 'Yes' : 'No'}`);
