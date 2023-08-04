var fs = require("fs");
var digitRegex = /^[0-9]$/;
var digitsRegex = /^[0-9]+$/;
var numberRegex = /^[0-9]+(\.[0-9]+)?(E[+-]?[0-9]+)?$/;
var letterRegex = /^[A-Za-z]$/;
var idRegex = /^[A-Za-z][A-Za-z0-9]*$/;
function categorizeTestCases(testCases) {
    return testCases.map(function (testCase) {
        if (testCase === "then" || testCase === "if" || testCase === "else")
            return "(".concat(testCase, ",").concat(testCase.toUpperCase(), ")");
        if (testCase === "<" ||
            testCase === ">" ||
            testCase === ">=" ||
            testCase === "<=" ||
            testCase === "=" ||
            testCase === "<>")
            return "(relop,".concat(testCase, ")");
        if (digitRegex.test(testCase)) {
            return "(digit,".concat(testCase, ")");
        }
        else if (numberRegex.test(testCase)) {
            return "(number,".concat(testCase, ")");
        }
        else if (digitsRegex.test(testCase)) {
            return "(digits,".concat(testCase, ")");
        }
        else if (letterRegex.test(testCase)) {
            return "(letter,".concat(testCase, ")");
        }
        else if (idRegex.test(testCase)) {
            return "(id,".concat(testCase, ")");
        }
        else {
            return "(Unrecognized,".concat(testCase, ")");
        }
    });
}
function buildArray(inputString) {
    var outputArray = [];
    var tempString = "";
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === " " ||
            inputString[i] === "\n" ||
            inputString[i] === "\t" ||
            inputString[i] === "<" ||
            inputString[i] === ">" ||
            inputString[i] === "=") {
            if (tempString !== " " && tempString.length > 0 && tempString)
                outputArray.push(tempString);
            if (inputString[i + 1] === "<" ||
                inputString[i + 1] === ">" ||
                inputString[i + 1] === "=") {
                outputArray.push(inputString[i] + inputString[i + 1]);
                i++;
            }
            else if (inputString[i] === "<" ||
                inputString[i] === ">" ||
                inputString[i] === "=")
                outputArray.push(inputString[i]);
            tempString = "";
        }
        else {
            tempString += inputString[i];
        }
    }
    if (tempString !== " " && tempString.length > 0 && tempString)
        outputArray.push(tempString);
    return outputArray;
}
function readInputFromFile(filename) {
    return fs.readFileSync(filename, "utf8");
}
function writeOutputToFile(filename, output) {
    fs.writeFileSync(filename, output.join("\n"), "utf8");
}
function main() {
    var inputFilePath = "input.txt";
    var outputFilePath = "output.txt";
    var inputString = readInputFromFile(inputFilePath);
    var testCases = buildArray(inputString);
    var categorizedTestCases = categorizeTestCases(testCases);
    writeOutputToFile(outputFilePath, categorizedTestCases);
}
main();
