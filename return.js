function exampleFunction() {
    console.log('Before return'); // This will be executed

    return; // Exit the function immediately

    console.log('After return'); // This will not be executed
}

exampleFunction(); // Calling the function

console.log('Outside the function'); // This will be executed
