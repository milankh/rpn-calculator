const readline = require("readline");
const validateInput = require("./validateInput");
const operation = require("./operation");

const { stdin, stdout } = process;

const reader = readline.createInterface({
    input: stdin,
    output: stdout,
    terminal: false,
});

readline.emitKeypressEvents(process.stdin);

// raw mode to lisen to each characters separately
stdin.setRawMode(true);

reader.on("line", (userInput) => {
    // just for conveniene, if you type clear and enter it will clear the current stack
    if (userInput === "clear") {
        operation.clearStack();
        console.log("\n stack is cleared");
        return;
    }
    // for convenience, exit will terminate the process
    if (userInput === "exit") {
        process.exit();
    }

    // when there is user input that needs to be processed
    if (userInput && validateInput(userInput)) {
        operation.processInput(userInput);
    } else {
        // ignore 
        console.log("\n invalid input")
    }

})

stdin.on("keypress", (str, key) => {
    if (key.ctrl) {
        if (key.name.toLowerCase() === "c") {
            //keyboard interrupt
            console.log("Keyboard interrupt, exiting ...");
            process.exit();
        } else if (
            key.name.toLowerCase() === "d" ||
            key.name.toLowerCase() === "z"
        ) {
            //end of file
            console.log("EOF, exiting ...");
            process.exit();
        }
    } else if (
        key &&
        key.name && 
        key.name.toLowerCase() === "q"    
    ) {
        // q keyword
        console.log("quitting ...")
        process.exit();
    }
    stdout.write(str);
})