# rpn-calculator 

This is a command line RPN (reverse polish notation) calculator. RPN is a mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands.

## Installation

Checkout the branch [rpn-calculator](https://github.com/milankh/rpn-calculator.git) to run the application or run the below command in your terminal.

```bash
git checkout rpn-calculator https://github.com/milankh/rpn-calculator.git
```

## Running
Use command terminal to access to the folder rpn-calculator and run the following in order
```bash 
npm install
```
```bash 
node reader.js
```

- For running tests 
```bash 
npm test
```
## Usage
After seeing the message "Enter a number to begin" in console, enter one number at a time and hit enter. After you are done with entering number enter the operation considering it will do the operation for the last two numbers in the stack.

```javascript
Enter a number to begin.
2
=> 2
3 
[2, 3]
4
[2, 3, 4]
+
[2, 7]
*
=> 14
q
quitting ...
```
## Useful commands

```q``` -> Exit the application

```clear``` -> Clears the stack

```ctrl + c ``` -> Exit the application

```exit``` -> Exit the application

``` ctrl + d, ctrl+z ```  -> End of file, exit the application
