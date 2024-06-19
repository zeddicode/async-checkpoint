// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

const fetch = require('node-fetch'); // You can use any HTTP library for making API requests

const apiEndpoint = 'https://api.example.com/data'; // Replace with your actual API endpoint

const awaitCall = async () => {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log('API data:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Example usage:
awaitCall();
