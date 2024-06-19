// Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const iterateWithAsyncAwait = async (values) => {
  for (const value of values) {
    console.log(value);
    await wait(1000); // Wait for 1 second
  }
};

// Example usage:
const myValues = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(myValues);
