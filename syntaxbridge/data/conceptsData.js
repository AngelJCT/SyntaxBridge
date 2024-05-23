// conceptsData.js
const conceptsData = {
    loops: {
      title: "Loops",
      description: "Loops are used to execute a block of code repeatedly. Different types of loops include for loops, while loops, and do-while loops.",
      examples: {
        javascript: "for (let i = 0; i < 10; i++) {\n    console.log(i);\n}",
        python: "for i in range(10):\n    print(i)",
        // Add more examples for other languages
      },
      common_pitfalls: "Common pitfalls of loops include infinite loops, off-by-one errors, and improper loop initialization.",
      best_practices: "Ensure proper initialization, condition, and increment/decrement in loops. Use meaningful variable names.",
      advanced_topics: "Nested loops, loop unrolling, and vectorization for performance optimization.",
      references: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration", "https://docs.python.org/3/tutorial/controlflow.html#for-statements"]
    },
    // Add more concepts
  };
  
  export default conceptsData;
  