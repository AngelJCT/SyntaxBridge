import Link from "next/link";
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function SyntaxBridge() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-[280px] dark:border-none bg-gradient-to-b from-[#eceff2] via-[#d5dde2] to-[#8197a8] p-6 dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#393d41] lg:block">
        <nav className="grid gap-4">
          <h1 className="flex items-center gap-3 rounded-lg px-3 py-2 text-2xl font-semibold tracking-[1px] bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Programming Concepts
          </h1>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            Loops
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            If/Else
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            Variable Declaration
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            Imports & Exports
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            Functions
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            Classes
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xl text-gray-700 transition-all hover:text-black dark:text-gray-200 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            href="#"
          >
            <CodeIcon className="h-5 w-5" />
            AI
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-6 md:p-8">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-6xl font-bold mb-4 py-2 tracking-[2px] bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            <p>
              Syntax<span className="font-normal">Bridge</span>
            </p>
          </h1>
          <h2 className="text-2xl font-semibold mb-8 tracking-[2px] bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Cross the Syntax Divide
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <Select>
              <SelectTrigger className="w-full md:w-[180px] shadow-sm">
                <SelectValue placeholder="Select Language 1" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="kotlin">Kotlin</SelectItem>
                  <SelectItem value="php">PHP</SelectItem>
                  <SelectItem value="c++">C++</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                  <SelectItem value="swift">Swift</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] shadow-sm">
                <SelectValue placeholder="Select Language 2" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="kotlin">Kotlin</SelectItem>
                  <SelectItem value="php">PHP</SelectItem>
                  <SelectItem value="c++">C++</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                  <SelectItem value="swift">Swift</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
          <div className="code-box p-6">
            <div className="h-[300px] overflow-auto">
              <pre className="font-mono text-lg dark:text-gray-100">
                for (let i = 0; i
              </pre>
            </div>
          </div>
          <div className="code-box p-6">
            <div className="h-[300px] overflow-auto">
              <pre className="font-mono text-lg dark:text-gray-100">
                for i in range(10): print(i)
              </pre>
            </div>
          </div>
          <div className="w-full mt-8 text-gray-500 dark:text-gray-200 items-center justify-center">
            This page provides a side-by-side comparison of programming language
            syntax for common programming concepts. You can select two languages
            from the dropdown menus above to see the corresponding code examples
            displayed in the code editor boxes.
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
