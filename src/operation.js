let processedValues = [];
const supportedOperators = ["+", "-", "*", "/"];

// Simulate stack pop
popProcessedValues = (values) => {
    if (values && values.length != 0) {
        const requiredValue = values[values.length - 1];
        processedValues = processValues(values);
        return requiredValue;
    }
};

processValues = (values) => {
    return values.filter((_, index) => index !== values.length - 1);
}

clearStack = () => {
    processedValues = [];
}

printValues = () => {
    if (processedValues && processedValues.length != 0) {
        if (processedValues.length > 1) {
            console.log("\n")
            console.log(processedValues);
        } else console.log("\n => ", processedValues[processedValues.length - 1]);
      }
}

processInput = (userInput) => {
    const splitChars = userInput.split(" ");
    splitChars.forEach((charBlock) => {
        if (supportedOperators.includes(charBlock.trim())) {
            if (processedValues.length < 2) {
                console.log("\nNot enough values to operate");
            } else {
                let firstValue = popProcessedValues(processedValues);
                let secondValue = popProcessedValues(processedValues);

                switch(charBlock.trim()) {
                    //add more cases for other operator support
                    case "+":
                        processedValues.push(firstValue + secondValue);
                        break;

                    case "-":
                        processedValues.push(secondValue - firstValue);
                        break;

                    case "*":
                        processedValues.push(firstValue * secondValue);
                        break;

                    case "/":
                        if (secondValue != 0) {
                            processedValues.push(secondValue / firstValue);
                        } else {
                            console.log("Cannot divide by 0");
                        }
                        break;
                    
                    default:
                        break;
                }
            }
        } else {
            try {
                const parsedValue = parseFloat(charBlock);
                if ( !isNaN(parsedValue)) {
                    processedValues.push(parsedValue);
                }
            } catch (e) {
                // ignore this and move on
            }
        }
    });
    printValues();
}

module.exports.processInput = processInput;
module.exports.clearStack = clearStack;
module.exports.processValues = processValues;
module.exports.popProcessedValues = popProcessedValues;