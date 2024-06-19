// Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

const fetch = require('node-fetch'); // You can use any HTTP library for making API requests

const apiEndpoint1 = 'https://api.example.com/endpoint1';
const apiEndpoint2 = 'https://api.example.com/endpoint2';

const concurrentRequests = async () => {
  try {
    const [result1, result2] = await Promise.all([
      fetch(apiEndpoint1).then(response => response.json()),
      fetch(apiEndpoint2).then(response => response.json())
    ]);

    console.log('Result from API Endpoint 1:', result1);
    console.log('Result from API Endpoint 2:', result2);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Example usage:
concurrentRequests();
