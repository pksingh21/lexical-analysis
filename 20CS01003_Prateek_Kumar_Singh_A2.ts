const fs = require("fs");

const digitRegex = /^[0-9]$/;
const digitsRegex = /^[0-9]+$/;
const numberRegex = /^[0-9]+(\.[0-9]+)?(E[+-]?[0-9]+)?$/;
const letterRegex = /^[A-Za-z]$/;
const idRegex = /^[A-Za-z][A-Za-z0-9]*$/;

function categorizeTestCases(testCases: string[]): string[] {
  return testCases.map((testCase) => {
    if (testCase === "then" || testCase === "if" || testCase === "else")
      return `(${testCase},)`;
    if (
      testCase === "<" ||
      testCase === ">" ||
      testCase === ">=" ||
      testCase === "<=" ||
      testCase === "=" ||
      testCase === "<>"
    )
      return `(relop,${testCase})`;
    if (digitRegex.test(testCase)) {
      return `(digit,${testCase})`;
    } else if (numberRegex.test(testCase)) {
      return `(number,${testCase})`;
    } else if (digitsRegex.test(testCase)) {
      return `(digits,${testCase})`;
    } else if (letterRegex.test(testCase)) {
      return `(letter,${testCase})`;
    } else if (idRegex.test(testCase)) {
      return `(id,${testCase})`;
    } else {
      return `(Unrecognized,${testCase})`;
    }
  });
}

function buildArray(inputString: string): string[] {
  let outputArray: string[] = [];
  let tempString = "";
  for (let i = 0; i < inputString.length; i++) {
    if (
      inputString[i] === " " ||
      inputString[i] === "\n" ||
      inputString[i] === "\t" ||
      inputString[i] === "<" ||
      inputString[i] === ">" ||
      inputString[i] === "="
    ) {
      if (tempString !== " " && tempString.length > 0 && tempString)
        outputArray.push(tempString);
      if (
        inputString[i + 1] === "<" ||
        inputString[i + 1] === ">" ||
        inputString[i + 1] === "="
      ) {
        outputArray.push(inputString[i] + inputString[i + 1]);
        i++;
      } else if (
        inputString[i] === "<" ||
        inputString[i] === ">" ||
        inputString[i] === "="
      )
        outputArray.push(inputString[i]);

      tempString = "";
    } else {
      tempString += inputString[i];
    }
  }
  if (tempString !== " " && tempString.length > 0 && tempString)
    outputArray.push(tempString);
  return outputArray;
}

function readInputFromFile(filename: string): string {
  return fs.readFileSync(filename, "utf8");
}

function writeOutputToFile(filename: string, output: string[]): void {
  fs.writeFileSync(filename, output.join("\n"), "utf8");
}

function main(): void {
  const inputFilePath = "input.txt";
  const outputFilePath = "output.txt";

  const inputString = readInputFromFile(inputFilePath);
  const testCases = buildArray(inputString);
  const categorizedTestCases = categorizeTestCases(testCases);

  writeOutputToFile(outputFilePath, categorizedTestCases);
}

main();
