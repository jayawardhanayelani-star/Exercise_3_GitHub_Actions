const request = require('supertest');
const app = require('../app');

const { test } = require('node:test');
const assert = require('node:assert');

// Test 1: Home route
test('GET / should return welcome message', async () => {

    const response = await request(app).get('/');

    assert.strictEqual(response.status, 200);

    assert.strictEqual(
        response.text,
        'Hello from Exercise 3!'
    );

});

// Test 2: Health route
test('GET /health should return server status', async () => {

    const response = await request(app).get('/health');

    assert.strictEqual(response.status, 200);

    assert.deepStrictEqual(response.body, {
        status: 'OK',
        message: 'Server is running'
    });

});