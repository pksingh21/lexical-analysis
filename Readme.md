# Test Case Categorization 
This code contains a Node.js script written in typescript that categorizes test cases based on different regular expressions and operators. The purpose is to identify the type of each test case, such as whether it represents a digit, number, identifier, relational operator, or keyword (e.g., "if", "then", "else").

## Prerequisites

Before running the script, ensure you have [Node.js](https://nodejs.org) installed on your system.

## How to Use

1. Download the zip file to your machine.

2. Create an `input.txt` file and populate it with the input string containing the test cases you want to categorize. Make sure each test case is separated by spaces or newlines.

3. Open a terminal or command prompt in the same directory as the `20CS01003_Prateek_Kumar_Singh_A2.js` script.

4. Run the following command to execute the script:

   ```bash
    bash scriptForRunning
   ```

5. The script will first compile the typescript code into javascript code then read the content from `input.txt`, categorize the test cases, and save the results in `output.txt`.

## Regular Expression Categories

The script uses the following regular expression categories:

- **`digitRegex`**: Matches single digits.
- **`digitsRegex`**: Matches sequences of digits.
- **`numberRegex`**: Matches numbers, including decimal numbers and numbers with exponent notation (E.g., 10.5, 2.3E+10).
- **`letterRegex`**: Matches single letters (both uppercase and lowercase).
- **`idRegex`**: Matches identifiers, which start with a letter and can be followed by letters or digits.

Sure! Let's break down the code step by step to explain its functionality.

## Code Explaination

1. The script begins by importing the Node.js File System module (`fs`). This module allows the script to read and write files.

2. Next, several regular expressions are defined to categorize different types of test cases:

3. The `categorizeTestCases` function takes an array of test cases as input and returns an array of categorized test cases. It uses the defined regular expressions to match the test cases and categorize them accordingly. The function utilizes `Array.map` to iterate through each test case and return its corresponding category as a string in the format `(category,testCaseValue)`.

4. The `buildArray` function takes an `inputString` as input and converts it into an array of test cases. It splits the input string using spaces, newlines, tabs, and specific relational operators (`<`, `>`, `<=`, `>=`, `=`, `<>`) as delimiters. This function ensures that each test case is isolated and ready for categorization.

5. The commented-out section below the `buildArray` function was likely an initial test of the categorization process using a hardcoded input string. However, since the goal is to read input from `input.txt` and write the results to `output.txt`, this section is no longer needed and can be removed.

6. The `readInputFromFile` function takes a `filename` as input and reads the content from the specified file using the `fs.readFileSync` method. It returns the content of the file as a string.

7. The `writeOutputToFile` function takes a `filename` and an `output` array as input. It writes the contents of the `output` array to the specified file using the `fs.writeFileSync` method. The elements of the `output` array are joined using newlines as separators to produce a formatted output.

8. The `main` function serves as the entry point of the script. It defines the `inputFilePath` and `outputFilePath`, specifying the paths for the input and output files, respectively.

9. Inside the `main` function, the script reads the content from `input.txt` using the `readInputFromFile` function and passes it to the `buildArray` function to convert it into an array of test cases.

10. The `categorizeTestCases` function is then called to categorize each test case in the array, producing the `categorizedTestCases` array.

11. Finally, the script writes the categorized test cases to `output.txt` using the `writeOutputToFile` function.

## Test Case Categorization

The script categorizes each test case in the input string and generates an output file with the corresponding category and test case value.

## Example

Assuming the `input.txt` file contains the following input:

```
if input<30 then output3=300 else output4>=300
if input<40 then output5=    300 else output4>=    300
```

After running the script, the `output.txt` file will contain the following output:

```
(if,IF)
(id,input)
(relop,<)
(number,10)
(then,THEN)
(id,output1)
(relop,=)
(number,100)
(else,ELSE)
(id,output2)
(relop,>=)
(number,100)
(if,IF)
(id,input)
(relop,<)
(number,30)
(then,THEN)
(id,output3)
(relop,=)
(number,300)
(else,ELSE)
(id,output4)
(relop,>=)
(number,300)
(if,IF)
(id,input)
(relop,<)
(number,40)
(then,THEN)
(id,output5)
(relop,=)
(number,300)
(else,ELSE)
(id,output4)
(relop,>=)
(number,300)

```

##Author
Prateek Kumar Singh
20cs01003@iitbbs.ac.in
github.com/pksingh21

## Note

The code section that originally executed the test cases directly has been commented out. Instead, the script reads input from `input.txt` and writes the results to `output.txt` to improve flexibility and ease of use.
