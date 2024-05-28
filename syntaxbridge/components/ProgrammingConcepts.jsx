"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useStateContext } from "@/context/StateContext";
import conceptsData from "@/data/conceptsData";
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
]

export default function ProgrammingConcepts() {
    const {selectedConcept, setSelectedConcept, handleConceptClick} = useStateContext();
    const [conceptInfo, setConceptInfo] = useState(conceptsData[selectedConcept] || {});
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    // This useEffect hook runs whenever the selectedConcept state changes.
    // It updates the conceptInfo state with the details of the newly selected concept
    // from the conceptsData. This ensures that the component re-renders with the
    // latest information whenever a new concept is selected.
    useEffect(() => {
        setConceptInfo(conceptsData[selectedConcept] || {});
    }, [selectedConcept]);

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
                            <CodeIcon className="h-5 w-5 fixed-size-icon" />
                            {concept.name}
                        </Link>
                    ))}
                </nav>
            </div>
            {/* concept content */}
            <div className="relative xs:px-[5px] p-6 md:p-8 container mx-auto mb-10">
                <div className="syntaxbridge-gradient-ball-1 -z-10 absolute md:top-[25rem] xs:top-[55rem] sm:top-[55rem]"></div>
                <div className="syntaxbridge-gradient-ball-2 -z-10 absolute md:top-[8rem] xs:top-[6rem]"></div>
                {conceptInfo ? (
                    <>
                        <h2 className="sm:text-3xl xs:text-xl font-bold mb-4 text-[#26292b] dark:text-[#f7f8f8]">{conceptInfo.title}</h2>
                        <p className="sm:text-lg xs:text-sm mb-4 text-gray-500 dark:text-gray-300">{conceptInfo.description}</p>
                        <h3 className="sm:text-2xl xs:text-lg font-semibold mb-2 text-[#26292b] dark:text-[#f7f8f8]">Examples:</h3>
                        {conceptInfo.examples && (
                            <div>
                                <div className="grid md:grid-cols-5 xs:grid-cols-3 gap-x-4 gap-y-4 mb-4">
                                    {Object.keys(conceptInfo.examples).map((language) => (
                                        <button
                                            key={language}
                                            onClick={() => setSelectedLanguage(language)}
                                            className="px-3 py-2 rounded-lg bg-[#d5dde2] bg-opacity-40 dark:bg-[#798189] dark:bg-opacity-10 backdrop-blur-[4px] text-[#26292b] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 border border-[#26292b15] dark:border-none"
                                        >
                                            {language}
                                        </button>
                                    ))}
                                </div>
                                <pre className="bg-[#d5dde2] bg-opacity-40 dark:bg-[#798189] dark:bg-opacity-10 backdrop-blur-[4px] text-[#26292b] dark:text-gray-300 p-4 mb-4 rounded-lg xs:text-[12px] sm:text-base overflow-auto border border-[#26292b15] dark:border-none whitespace-pre-wrap">
                                    {conceptInfo.examples[selectedLanguage]}
                                </pre>
                            </div>
                        )}
                        <h3 className="sm:text-2xl xs:text-lg font-semibold mb-2 text-[#26292b] dark:text-[#f7f8f8]">Common Pitfalls:</h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-300 sm:text-base xs:text-sm">{conceptInfo.common_pitfalls}</p>
                        <h3 className="sm:text-2xl xs:text-lg font-semibold mb-2 text-[#26292b] dark:text-[#f7f8f8]">Best Practices:</h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-300 sm:text-base xs:text-sm">{conceptInfo.best_practices}</p>
                        <h3 className="sm:text-2xl xs:text-lg font-semibold mb-2 text-[#26292b] dark:text-[#f7f8f8]">Advanced Topics:</h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-300 sm:text-base xs:text-sm">{conceptInfo.advanced_topics}</p>
                        {conceptInfo.references && conceptInfo.references.length > 0 && (
                            <>
                                <h3 className="sm:text-2xl xs:text-lg font-semibold mb-2">References:</h3>
                                <ul className="list-disc ml-4">
                                    {conceptInfo.references.map((ref, index) => (
                                        <li key={index}>
                                            <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline sm:text-base xs:text-[10px] whitespace-pre-wrap">
                                                {ref}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </>
                ) : (
                    <p>Select a concept to view its details.</p>
                )}
            </div>
        </div>
    );
}