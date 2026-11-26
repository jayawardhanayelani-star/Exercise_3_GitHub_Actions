const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Exercise 3!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Server is running'
    });
});

module.exports = app;