"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import snippets from "@/data/snippets.json";
import descriptions from "@/data/conceptsDescriptions.json"
import { useStateContext } from "@/context/StateContext";
import AIComponent from "./AIComponent";
import CodeIcon from "@/utils/CodeIcon";

const concepts = [
  { name: "Loops", value: "loops" },
  { name: "If/Else", value: "if_else" },
  { name: "Variable Declaration", value: "variable_declaration" },
  { name: "Imports & Exports", value: "imports_exports" },
  { name: "Functions", value: "functions" },
  { name: "Classes", value: "classes" },
  { name: "Error Handling", value: "error_handling"},
  { name: "File I/O", value: "file_io"},
  { name: "Ternary Expression", value: "ternary_expression"},
  { name: "AI", value: "ai" },
]



export default function SyntaxBridge() {
  const { selectedConcept, setSelectedConcept, language1, setLanguage1, language2, setLanguage2 } = useStateContext();
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(descriptions[selectedConcept]?.description || '');
  }, [selectedConcept])

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
  };

  const renderSnippet = (concept, language) => {
    if (snippets[concept] && snippets[concept].examples && snippets[concept].examples[language]) {
      return snippets[concept].examples[language].map((example, index) => (
        <div key={index} className="mb-4">
          <pre className="w-full font-mono text-lg dark:text-gray-100 bg-[#d5dde2] bg-opacity-40 dark:bg-[#798189] dark:bg-opacity-10 backdrop-blur-[4px] rounded-lg p-2 mb-4 whitespace-pre-wrap">
            {example.code}
          </pre>
          <p>{example.description}</p>
        </div>
      ));
    }
    return "No snippet available";
  }

  const renderDescription = (description) => {
    const [mainText, importantText] = description.split('\n\n**Important:**');
    return (
      <div className="w-full mt-8 text-gray-500 dark:text-gray-200 items-center justify-center">
        <p>{mainText}</p>
        {importantText && (
          <p className="mt-4 font-semibold tracking-[1px]">
            <strong className="text-red-400">Important:</strong>{importantText}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="syntaxbridge-gradient flex min-h-screen">
      {/* concepts nav */}
      <div className="syntax-bridge-nav hidden w-[280px] p-6 lg:block">
        <nav className="grid gap-4">
          <h1 className="flex items-center gap-3 rounded-lg px-3 py-2 text-2xl font-semibold tracking-[1px] bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
            Programming Concepts
          </h1>
          {concepts.map((concept) => (
            <Link
              key={concept.name}
              className="flex items-center gap-3 rounded-lg p-2 text-[18px] leading-[28px] text-gray-700 transition-all hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
              href="#"
              onClick={() => handleConceptClick(concept.value)}
            >
              <CodeIcon className="h-5 w-5" />
              {concept.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container mx-auto relative xs:px-[5px]">
        {/* main page */}
        <div className="flex-1 xs:py-6 md:p-8 mb-6">
          <div className="syntaxbridge-gradient-ball-1 -z-10 absolute md:top-[25rem] xs:top-[55rem] sm:top-[55rem]"></div>
          <div className="syntaxbridge-gradient-ball-2 -z-10 absolute md:top-[8rem] xs:top-[6rem]"></div>
          <div className="flex flex-col items-center justify-between text-center">
            <h1 className="text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[5rem] xl:leading-[5rem] font-bold md:mb-10 xs:mb-8 py-2 tracking-[2px] bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">
              Syntax<span className="font-normal">Bridge</span>
            </h1>
            
            {selectedConcept !== "ai" ? (
              <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <Select onValueChange={(value) => setLanguage1(value)}>
                  <SelectTrigger className="w-full md:w-[180px] shadow-sm">
                    <SelectValue placeholder="Select Language 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.keys(snippets.loops.examples).map((lang) => (
                        <SelectItem key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => setLanguage2(value)}>
                  <SelectTrigger className="w-full md:w-[180px] shadow-sm">
                    <SelectValue placeholder="Select Language 2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.keys(snippets.loops.examples).map((lang) => (
                        <SelectItem key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ) : null}
          </div>
          {selectedConcept === "ai" ? (
            <AIComponent />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
              <div className="code-box p-6">
                <div className="h-[300px] overflow-auto">
                  {renderSnippet(selectedConcept, language1)}
                </div>
              </div>
              <div className="code-box">
                <div className="h-[300px] overflow-auto">
                  {renderSnippet(selectedConcept, language2)}
                </div>
              </div>
            </div>
          )}
          {renderDescription(description)}
        </div>
      </div>
    </div>
  );
}
