const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to respond with "Hello, World!" for all requests
app.use((req, res, next) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});