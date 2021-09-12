const inputFormat = /^[ 0-9-+*\/]*$/;

//validates the user input
validateInput = (userInput) => {
    return inputFormat.test(userInput);
}

module.exports = validateInput;