// conceptsData.js
const conceptsData = {
    loops: {
      title: "Loops",
      description: "Loops are control structures used to repeat a block of code a certain number of times or until a specific condition is met. There are different types of loops, such as for loops, while loops, and do-while loops, each suited to different tasks.",
      examples: {
        javascript: "// Using a for...of loop with array destructuring to get index and value\nconst fruits = ['apple', 'banana', 'cherry'];\nfor (const [index, fruit] of fruits.entries()) {\n    console.log(`Index ${index} has fruit ${fruit}`);\n}\n\n// Output:\n// Index 0 has fruit apple\n// Index 1 has fruit banana\n// Index 2 has fruit cherry\n\n// Using a for loop with a step value\nfor (let i = 0; i < 10; i += 2) {\n    console.log(i);\n}\n\n// Output:\n// 0\n// 2\n// 4\n// 6\n// 8\n\n// Using a for...in loop to iterate over object properties\nconst person = { name: 'John', age: 30, city: 'New York' };\nfor (const key in person) {\n    if (person.hasOwnProperty(key)) {\n        console.log(`${key}: ${person[key]}`);\n    }\n}\n\n// Output:\n// name: John\n// age: 30\n// city: New York",
        python: "# Using a for loop with enumerate to get index and value\nfruits = ['apple', 'banana', 'cherry']\nfor index, fruit in enumerate(fruits):\n    print(f'Index {index} has fruit {fruit}')\n\n# Output:\n# Index 0 has fruit apple\n# Index 1 has fruit banana\n# Index 2 has fruit cherry\n\n# Using a for loop with range and step\nfor i in range(0, 10, 2):\n    print(i)\n\n# Output:\n# 0\n# 2\n# 4\n# 6\n# 8",
        java: "// Using a for loop to iterate over an array\nString[] fruits = {\"apple\", \"banana\", \"cherry\"};\nfor (int i = 0; i < fruits.length; i++) {\n    System.out.println(\"Index \" + i + \" has fruit \" + fruits[i]);\n}\n\n// Output:\n// Index 0 has fruit apple\n// Index 1 has fruit banana\n// Index 2 has fruit cherry\n\n// Using a while loop to print numbers from 0 to 9\nint i = 0;\nwhile (i < 10) {\n    System.out.println(i);\n    i++;\n}\n\n// Output:\n// 0\n// 1\n// 2\n// 3\n// 4\n// 5\n// 6\n// 7\n// 8\n// 9",
        c: "// Using a for loop to iterate over an array\nchar *fruits[] = {\"apple\", \"banana\", \"cherry\"};\nfor (int i = 0; i < 3; i++) {\n    printf(\"Index %d has fruit %s\\n\", i, fruits[i]);\n}\n\n// Output:\n// Index 0 has fruit apple\n// Index 1 has fruit banana\n// Index 2 has fruit cherry\n\n// Using a while loop to print numbers from 0 to 9\nint i = 0;\nwhile (i < 10) {\n    printf(\"%d\\n\", i);\n    i++;\n}\n\n// Output:\n// 0\n// 1\n// 2\n// 3\n// 4\n// 5\n// 6\n// 7\n// 8\n// 9",
        cpp: "// Using a for loop to iterate over an array\nstd::vector<std::string> fruits = {\"apple\", \"banana\", \"cherry\"};\nfor (int i = 0; i < fruits.size(); i++) {\n    std::cout << \"Index \" << i << \" has fruit \" << fruits[i] << std::endl;\n}\n\n// Output:\n// Index 0 has fruit apple\n// Index 1 has fruit banana\n// Index 2 has fruit cherry\n\n// Using a while loop to print numbers from 0 to 9\nint i = 0;\nwhile (i < 10) {\n    std::cout << i << std::endl;\n    i++;\n}\n\n// Output:\n// 0\n// 1\n// 2\n// 3\n// 4\n// 5\n// 6\n// 7\n// 8\n// 9",
      },
      common_pitfalls: "Common pitfalls of loops include infinite loops, off-by-one errors, and improper loop initialization. For example, forgetting to increment the loop counter can cause an infinite loop. Another common issue is using incorrect comparison operators, which can lead to loops that either run too many times or not at all.",
      best_practices: "Ensure proper initialization, condition, and increment/decrement in loops. Use meaningful variable names. For example, instead of using single-letter variable names like 'i', use descriptive names like 'counter' or 'index' when appropriate. Additionally, avoid modifying the loop counter within the loop body unless absolutely necessary, as this can make the loop logic harder to understand.",
      advanced_topics: "Nested loops, loop unrolling, and vectorization for performance optimization. Nested loops allow you to handle multi-dimensional data structures like matrices. Loop unrolling is a technique used to optimize the performance of loops by reducing the overhead of loop control. Vectorization involves processing multiple elements of data with a single instruction, which can significantly speed up loop execution on modern processors.",
      references: ["https://www.geeksforgeeks.org/loops-programming/"]
    },
    if_else: {
        title: "If/Else Statements",
        description: "If/Else statements are conditional statements that execute different blocks of code based on whether a condition evaluates to true or false. They are fundamental for controlling the flow of a program.",
        examples: {
          javascript: `// If/Else Statement
const number = 10;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

// Else If Statement
const num = 0;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}`,
          python: `# If/Else Statement
number = 10
if number > 0:
    print("The number is positive.")
else:
    print("The number is not positive.")

# Else If Statement (elif in Python)
num = 0
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`,
          java: `// If/Else Statement
int number = 10;
if (number > 0) {
    System.out.println("The number is positive.");
} else {
    System.out.println("The number is not positive.");
}

// Else If Statement
int num = 0;
if (num > 0) {
    System.out.println("Positive");
} else if (num < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}`,
          c: `// If/Else Statement
int number = 10;
if (number > 0) {
    printf("The number is positive.");
} else {
    printf("The number is not positive.");
}

// Else If Statement
int num = 0;
if (num > 0) {
    printf("Positive");
} else if (num < 0) {
    printf("Negative");
} else {
    printf("Zero");
}`,
          cpp: `// If/Else Statement
int number = 10;
if (number > 0) {
    cout << "The number is positive." << endl;
} else {
    cout << "The number is not positive." << endl;
}

// Else If Statement
int num = 0;
if (num > 0) {
    cout << "Positive" << endl;
} else if (num < 0) {
    cout << "Negative" << endl;
} else {
    cout << "Zero" << endl;
}`,
        },
        common_pitfalls: "Common pitfalls of if/else statements include forgetting to handle all possible cases, leading to unintended behavior. Another issue is deeply nested if/else statements, which can make the code hard to read and maintain. Logical errors in conditions can also lead to incorrect execution paths.",
        best_practices: "Use clear and concise conditions. Ensure that all possible cases are handled, either with else if or a final else statement. Avoid deep nesting by using functions or early returns. Comment your code to explain complex conditions.",
        advanced_topics: "Ternary operators for simple if/else conditions, switch statements for multiple conditions, and pattern matching in languages that support it. These alternatives can sometimes make the code more readable and concise.",
        references: [
          "https://www.geeksforgeeks.org/conditional-statements-in-programming/?ref=lbp"
        ]
      },
      variable_declaration: {
        title: "Variable Declaration",
        description: "Variable declaration is the process of defining a variable in a programming language. A variable is a named storage location in memory that holds a value which can be modified during program execution. Variables are fundamental to storing data and performing operations on it.",
        examples: {
          javascript: `// Declaring a variable with let
let x = 10;
console.log(x); // Output: 10

// Declaring a constant with const
const y = 20;
console.log(y); // Output: 20

// Declaring a variable with var (older syntax)
var z = 30;
console.log(z); // Output: 30`,
          python: `# Declaring a variable
x = 10
print(x)  # Output: 10

# Declaring a constant (conventionally written in uppercase)
Y = 20
print(Y)  # Output: 20`,
          java: `// Declaring a variable
int x = 10;
System.out.println(x); // Output: 10

// Declaring a constant
final int Y = 20;
System.out.println(Y); // Output: 20`,
        c: `// Declaring a variable
int x = 10;
printf("%d\\n", x); // Output: 10

// Declaring a constant
const int Y = 20;
printf("%d\\n", Y); // Output: 20`,
          cpp: `// Declaring a variable
int x = 10;
cout << x << endl; // Output: 10

// Declaring a constant
const int Y = 20;
cout << Y << endl; // Output: 20`,
        },
        common_pitfalls: "Common pitfalls of variable declaration include using uninitialized variables, overwriting constants, and using incorrect data types. For example, failing to initialize a variable before using it can lead to unexpected behavior. Attempting to change the value of a constant will result in an error in most languages.",
        best_practices: "Use meaningful and descriptive variable names to make the code more readable. Initialize variables when declaring them to avoid undefined behavior. Use constants for values that should not change throughout the program. Follow the naming conventions of the programming language you are using.",
        advanced_topics: "Variable scope and lifetime, global vs local variables, static variables, and type inference. Understanding the scope and lifetime of variables is crucial for managing memory and avoiding bugs. Static variables retain their value between function calls. Type inference allows the compiler to automatically deduce the type of a variable based on its value.",
        references: ["https://www.geeksforgeeks.org/variables-programming/?ref=lbp"]
      }
  };
  
  export default conceptsData;
  