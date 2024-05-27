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
      },
      imports_exports: {
        title: "Imports & Exports",
        description: "Imports and exports are mechanisms used in programming languages to include external code modules or share code between files. They allow developers to organize and reuse code effectively, making it easier to maintain and scale projects. Imports are used to bring code from external files or modules into the current file. B importing code, you can access functions, classes, variables, and other entities, and they also help to avoid code duplication and make your codebase more maintainable.",
        examples: {
            javascript: `import { add } from './add.js'
            
export function add(a, b) {
    return a + b;
} `,
            python: "from math import sqrt",
            java: "import java.util.ArrayList;",
            c: "#include <stdio.h>",
            cpp: "#include <iostream>",
      },
        common_pitfalls: "Common pitfalls of imports and exports include circular dependencies, naming conflicts, and performance issues. Circular dependencies occur when two or more modules depend on each other, creating a loop that can lead to runtime errors. Naming conflicts can arise when importing modules with the same name or when naming modules similarly to built-in functions or variables.",
        best_practices: "Use explicit imports to avoid importing unnecessary code. Organize imports alphabetically or by category for better readability. Avoid wildcard imports, as they can lead to namespace pollution and make it harder to track dependencies. Use relative paths for local imports and absolute paths for external dependencies.",
        advanced_topics: "Dynamic imports for lazy loading, tree shaking for dead code elimination, and module bundlers like Webpack for optimizing code splitting. Dynamic imports allow you to load modules asynchronously when needed, reducing the initial bundle size. Tree shaking is a technique used by bundlers to remove unused code from the final bundle, resulting in smaller file sizes and faster load times.",
    },
    functions: {
        title: "Functions",
        description: "Functions are blocks of reusable code that perform a specific task. They help in organizing code, improving readability, and reducing redundancy. Functions take input parameters, perform operations, and return output values. They are essential for modular programming and code reusability.",
        examples: {
            javascript: `// Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Function expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // Output: 2

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6`,
            python: `# Function definition
def add(a, b):
    return a + b
print(add(2, 3))  # Output: 5

# Lambda function
subtract = lambda a, b: a - b
print(subtract(5, 3))  # Output: 2

# Function with default parameters
def multiply(a, b=1):
    return a * b
print(multiply(2, 3))  # Output: 6
print(multiply(2))  # Output: 2`,
            java: `// Method definition
public class Main {
    public static void main(String[] args) {
        System.out.println(add(2, 3)); // Output: 5
        System.out.println(subtract(5, 3)); // Output: 2
        System.out.println(multiply(2, 3)); // Output: 6
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }
}`,
            c: `// Function declaration and definition
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int main() {
    printf("%d\\n", add(2, 3)); // Output: 5
    printf("%d\\n", subtract(5, 3)); // Output: 2
    printf("%d\\n", multiply(2, 3)); // Output: 6
    return 0;
}`,
            cpp: `// Function declaration and definition
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int main() {
    cout << add(2, 3) << endl; // Output: 5
    cout << subtract(5, 3) << endl; // Output: 2
    cout << multiply(2, 3) << endl; // Output: 6
    return 0;
}`,
        },
        common_pitfalls: "Common pitfalls of functions include incorrect parameter handling, not returning a value, and failing to manage the scope of variables. For example, if a function expects two parameters but only one is provided, it can lead to unexpected behavior. Additionally, functions that do not return a value when one is expected can cause logical errors.",
        best_practices: "Use descriptive names for functions and parameters to make the code more readable. Ensure that functions are small and focused on a single task. Avoid global variables within functions to prevent unintended side effects. Document functions with comments to explain their purpose, parameters, and return values.",
        advanced_topics: "Higher-order functions, closures, recursion, and function overloading. Higher-order functions take other functions as arguments or return them as results. Closures allow functions to retain access to their scope even when executed outside of it. Recursion involves a function calling itself, useful for solving complex problems. Function overloading allows multiple functions with the same name but different parameters.",
        references: ["https://www.geeksforgeeks.org/functions-programming/?ref=lbp"]
    },
    error_handling: {
        title: "Error Handling",
        description: "Error handling is the process of responding to and managing errors that occur during the execution of a program. Proper error handling is crucial for creating robust and reliable software. It helps in identifying issues, preventing crashes, and providing meaningful feedback to users.",
        examples: {
            javascript: `// Try/Catch Statement
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message);
}

// Finally Block
try {
    let data = fetchData();
    console.log(data);
} catch (error) {
    console.error('Failed to fetch data:', error.message);
} finally {
    console.log('Operation completed.');
}

// Custom Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

throw new CustomError('This is a custom error');`,
            python: `# Try/Except Block
try:
    result = risky_operation()
    print(result)
except Exception as error:
    print(f'An error occurred: {error}')

# Finally Block
try:
    data = fetch_data()
    print(data)
except Exception as error:
    print(f'Failed to fetch data: {error}')
finally:
    print('Operation completed.')

# Custom Exception
class CustomError(Exception):
    pass

raise CustomError('This is a custom error')`,
            java: `// Try/Catch Block
try {
    int result = riskyOperation();
    System.out.println(result);
} catch (Exception e) {
    System.err.println("An error occurred: " + e.getMessage());
}

// Finally Block
try {
    String data = fetchData();
    System.out.println(data);
} catch (Exception e) {
    System.err.println("Failed to fetch data: " + e.getMessage());
} finally {
    System.out.println("Operation completed.");
}

// Custom Exception
class CustomError extends Exception {
    public CustomError(String message) {
        super(message);
    }
}

throw new CustomError("This is a custom error");`,
            c: `// Error handling using return codes
#include <stdio.h>
#include <stdlib.h>

int riskyOperation() {
    // Simulate an error
    return -1;
}

int main() {
    int result = riskyOperation();
    if (result == -1) {
        fprintf(stderr, "An error occurred\n");
    } else {
        printf("Result: %d\n", result);
    }
    return 0;
}

// Custom Error with setjmp and longjmp
#include <setjmp.h>

jmp_buf buf;

void customError() {
    longjmp(buf, 1);
}

int main() {
    if (setjmp(buf)) {
        fprintf(stderr, "This is a custom error\n");
    } else {
        customError();
    }
    return 0;
}`,
            cpp: `// Try/Catch Block
#include <iostream>
#include <stdexcept>

int riskyOperation() {
    throw std::runtime_error("An error occurred");
}

int main() {
    try {
        int result = riskyOperation();
        std::cout << result << std::endl;
    } catch (const std::exception &e) {
        std::cerr << "An error occurred: " << e.what() << std::endl;
    }
    return 0;
}

// Custom Exception
class CustomError : public std::runtime_error {
public:
    CustomError(const std::string &message) : std::runtime_error(message) {}
};

int main() {
    throw CustomError("This is a custom error");
    return 0;
}`,
        },
        common_pitfalls: "Common pitfalls of error handling include neglecting to handle all possible errors, using overly broad catch statements that mask issues, and not cleaning up resources in the event of an error. Additionally, providing vague or uninformative error messages can make debugging and user support more difficult.",
        best_practices: "Catch specific exceptions to handle known error conditions and provide meaningful error messages. Use finally blocks or equivalent constructs to clean up resources. Log errors appropriately for future debugging and monitoring. Avoid using exceptions for control flow; use them only for actual error conditions.",
        advanced_topics: "Error propagation, custom error types, and logging frameworks. Error propagation involves re-throwing caught exceptions to be handled at a higher level. Custom error types allow for more specific error handling. Logging frameworks provide structured and configurable ways to record error information.",
        references: ["https://www.geeksforgeeks.org/error-handling-in-programming/?ref=lbp"]
    },
    classes: {
        title: "Classes",
        description: "Classes are blueprints for creating objects. They encapsulate data for the object and methods to manipulate that data. Classes help in organizing code, promoting reusability, and implementing object-oriented programming principles like inheritance and polymorphism.",
        examples: {
            javascript: `// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Inheritance
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    describeJob() {
        console.log(\`I am a \${this.position}.\`);
    }
}

const employee1 = new Employee('Bob', 25, 'Developer');
employee1.greet(); // Output: Hello, my name is Bob and I am 25 years old.
employee1.describeJob(); // Output: I am a Developer.`,
            python: `# Class definition
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f'Hello, my name is {self.name} and I am {self.age} years old.')

person1 = Person('Alice', 30)
person1.greet()  # Output: Hello, my name is Alice and I am 30 years old.

# Inheritance
class Employee(Person):
    def __init__(self, name, age, position):
        super().__init__(name, age)
        self.position = position

    def describe_job(self):
        print(f'I am a {self.position}.')

employee1 = Employee('Bob', 25, 'Developer')
employee1.greet()  # Output: Hello, my name is Bob and I am 25 years old.
employee1.describe_job()  # Output: I am a Developer.`,
            java: `// Class definition
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

public class Employee extends Person {
    private String position;

    public Employee(String name, int age, String position) {
        super(name, age);
        this.position = position;
    }

    public void describeJob() {
        System.out.println("I am a " + position + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("Alice", 30);
        person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.

        Employee employee1 = new Employee("Bob", 25, "Developer");
        employee1.greet();  // Output: Hello, my name is Bob and I am 25 years old.
        employee1.describeJob();  // Output: I am a Developer.
    }
}`,
            c: `// C (Structs and function pointers for a similar effect)

#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    void (*greet)(struct Person*);
} Person;

void greet(Person* p) {
    printf("Hello, my name is %s and I am %d years old.\\n", p->name, p->age);
}

Person create_person(char* name, int age) {
    Person p;
    strcpy(p.name, name);
    p.age = age;
    p.greet = greet;
    return p;
}

int main() {
    Person person1 = create_person("Alice", 30);
    person1.greet(&person1);  // Output: Hello, my name is Alice and I am 30 years old.
    return 0;
}`,
            cpp: `// Class definition
#include <iostream>
using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name, int age) : name(name), age(age) {}

    void greet() {
        cout << "Hello, my name is " << name << " and I am " << age << " years old." << endl;
    }
};

class Employee : public Person {
public:
    string position;

    Employee(string name, int age, string position) : Person(name, age), position(position) {}

    void describeJob() {
        cout << "I am a " << position << "." << endl;
    }
};

int main() {
    Person person1("Alice", 30);
    person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.

    Employee employee1("Bob", 25, "Developer");
    employee1.greet();  // Output: Hello, my name is Bob and I am 25 years old.
    employee1.describeJob();  // Output: I am a Developer.
    return 0;
}`,
  },
        common_pitfalls: "Common pitfalls of using classes include improper use of inheritance leading to a fragile base class, overuse of getters and setters which can break encapsulation, and not properly understanding the differences between class and instance variables. Additionally, forgetting to free memory in languages like C++ can lead to memory leaks.",
        best_practices: "Use classes to model real-world entities and ensure that each class has a single responsibility. Favor composition over inheritance to avoid a rigid class hierarchy. Make use of access modifiers to encapsulate data. Ensure proper use of constructors and destructors where applicable.",
        advanced_topics: "Polymorphism, abstract classes, and interfaces. Polymorphism allows methods to do different things based on the object it is acting upon. Abstract classes cannot be instantiated and are used to define common methods for derived classes. Interfaces define methods that must be implemented by any class that inherits the interface.",
        references: ["https://brilliant.org/wiki/classes-oop/"]
    },
    file_io: {
        title: "File I/O",
        description: "File I/O (Input/Output) is a crucial aspect of programming that allows a program to interact with files on the filesystem. It involves reading data from files and writing data to files. File I/O operations enable programs to persist data between executions, process large datasets, and more.",
        examples: {
          javascript: `// Writing to a file using the Node.js fs module
const fs = require('fs');
const data = 'Hello, World!';
fs.writeFile('hello.txt', data, (err) => {
    if (err) throw err;
    console.log('File has been written.');
});

// Reading from a file using the Node.js fs module
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});`,
          python: `# Writing to a file
with open('hello.txt', 'w') as file:
    file.write('Hello, World!')

# Reading from a file
with open('hello.txt', 'r') as file:
    data = file.read()
    print(data)`,
          java: `import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;

// Writing to a file
try (FileWriter writer = new FileWriter("hello.txt")) {
    writer.write("Hello, World!");
} catch (IOException e) {
    e.printStackTrace();
}

// Reading from a file
try (FileReader reader = new FileReader("hello.txt")) {
    int character;
    while ((character = reader.read()) != -1) {
        System.out.print((char) character);
    }
} catch (IOException e) {
    e.printStackTrace();
}`,
          c: `#include <stdio.h>

// Writing to a file
int main() {
    FILE *file = fopen("hello.txt", "w");
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    fprintf(file, "Hello, World!");
    fclose(file);

    // Reading from a file
    file = fopen("hello.txt", "r");
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    char buffer[255];
    while (fgets(buffer, 255, file) != NULL) {
        printf("%s", buffer);
    }
    fclose(file);
    return 0;
}`,
          cpp: `#include <fstream>
#include <iostream>
using namespace std;

// Writing to a file
int main() {
    ofstream outfile("hello.txt");
    outfile << "Hello, World!" << endl;
    outfile.close();

    // Reading from a file
    ifstream infile("hello.txt");
    string data;
    while (getline(infile, data)) {
        cout << data << endl;
    }
    infile.close();
    return 0;
}`,
        },
        common_pitfalls: "Common pitfalls in File I/O include not properly closing files after operations, which can lead to memory leaks and file corruption. Another issue is not handling errors correctly, such as trying to read from a non-existent file or lacking necessary file permissions.",
        best_practices: "Always ensure files are properly closed after operations using mechanisms like try-with-resources in Java, with statement in Python, or finally block in JavaScript. Handle potential errors gracefully and validate file paths and permissions before performing I/O operations.",
        advanced_topics: "Advanced topics in File I/O include working with binary files, asynchronous file operations for non-blocking I/O, and memory-mapped files for efficient file access. These techniques can significantly improve performance and scalability in applications that require intensive file operations.",
        references: [
          "https://www.geeksforgeeks.org/file-handling-c-classes/?ref=lbp", "https://medium.com/@adebanjoemmanuel01/file-i-o-6fdd7a4587b7"
        ]
      },
      ternary_expression: {
        title: "Ternary Expression",
        description: "The ternary expression is a concise way to perform conditional logic. It allows you to evaluate a condition and return one value if the condition is true and another value if the condition is false. The ternary expression is often used as a shorthand for simple if/else statements.",
        examples: {
          javascript: `// Basic usage
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

// Nested ternary expression
const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(grade); // Output: B`,
          python: `# Basic usage
age = 18
can_vote = 'Yes' if age >= 18 else 'No'
print(can_vote)  # Output: Yes

# Nested ternary expression
score = 85
grade = 'A' if score >= 90 else 'B' if score >= 80 else 'C'
print(grade)  # Output: B`,
          java: `// Basic usage
int age = 18;
String canVote = age >= 18 ? "Yes" : "No";
System.out.println(canVote); // Output: Yes

// Nested ternary expression
int score = 85;
String grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
System.out.println(grade); // Output: B`,
          c: `// Basic usage
int age = 18;
const char* canVote = age >= 18 ? "Yes" : "No";
printf("%s\\n", canVote); // Output: Yes

// Nested ternary expression
int score = 85;
const char* grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
printf("%s\\n", grade); // Output: B`,
          cpp: `#include <iostream>
using namespace std;

// Basic usage
int age = 18;
string canVote = age >= 18 ? "Yes" : "No";
cout << canVote << endl; // Output: Yes

// Nested ternary expression
int score = 85;
string grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
cout << grade << endl; // Output: B`,
        },
        common_pitfalls: "Common pitfalls of ternary expressions include reduced readability when overused or nested deeply. They can make the code harder to understand, especially for complex conditions. It's also easy to make mistakes with the syntax, such as forgetting the colon (:) separator.",
        best_practices: "Use ternary expressions for simple, concise conditions. Avoid using them for complex logic to maintain readability. When dealing with multiple conditions, consider using if/else statements or breaking down the logic into smaller, more manageable pieces.",
        advanced_topics: "Advanced usage of ternary expressions includes combining them with other conditional logic, using them in function arguments, and leveraging them in functional programming paradigms where concise expressions are preferred. They can also be used in template literals and JSX (in React) for conditional rendering.",
        references: [
          "https://www.lenovo.com/us/en/glossary/ternary-operator/?orgRef=https%253A%252F%252Fwww.google.com%252F"
        ]
      }
}

export default conceptsData;