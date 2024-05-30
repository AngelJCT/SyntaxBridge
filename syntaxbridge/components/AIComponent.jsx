"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from "@/utils/vs2015";
import vs2015Dark from "@/utils/vs2015Dark";
import { useTheme} from 'next-themes';
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

const languages = ["JavaScript", "Python", "Java", "C", "C++", "C#", "PHP", "Ruby", "Go", "Rust", "Swift", "Kotlin"];

const AIComponent = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputText, setOutputText] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("text");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: inputCode, language: targetLanguage}),
      });
      const data = await response.json();
      const { text, language, code } = extractCodeBlock(data.choices[0]?.message?.content || 'No response from AI');
      setOutputText(text);
      setLanguage(language);
      setOutputCode(code);
    } catch (error) {
      setOutputCode('Error occurred while fetching the translation');
    } finally {
      setIsLoading(false);
    }
  };

  const extractCodeBlock = (text) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/;
    const match = text.match(codeBlockRegex);
    if (match) {
      return {
        text: text.replace(codeBlockRegex, '').trim(),
        language: match[1] || 'text', // Default to 'text' if no language is specified
        code: match[2]
      };
    }
    return { text, language: 'text', code: '' };
  }

  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
      <div className="code-box-ai p-6">
        <textarea
          className="w-full xs:h-[400px] lg:h-[600px] p-2 font-mono sm:text-lg xs:text-sm text-[#26292b] dark:text-[#f7f8f8] mb-2 bg-transparent border border-[#26292b15] dark:border-[#b7bdc220] focus:outline-none focus:ring-2 focus:ring-[#26292b] dark:focus:ring-[#f7f8f8] focus:ring-offset-2"
          value={inputCode}
          onChange={handleInputChange}
          placeholder="Write your code here..."
        />
        <Button onClick={handleSubmit} className="bg-[#26292b] dark:bg-gray-200 text-gray-100 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300 shadow-sm dark:shadow-none" disabled={isLoading}>
          {isLoading ? "Translating..." : "Translate"}
        </Button>
      </div>
      <div className="code-box-ai p-6">
        <pre  className="w-full xs:h-[400px] lg:h-[600px] font-mono sm:text-lg xs:text-sm text-[#26292b] dark:text-[#f7f8f8] bg-transparent border border-[#26292b15] dark:border-[#b7bdc220] break-words whitespace-pre-wrap overflow-auto">
            <SyntaxHighlighter language={language} style={isDarkMode ? vs2015Dark : vs2015} className="xs:h-[416px] md:h-[400px]">
                {outputCode}
            </SyntaxHighlighter>
        </pre> 
        <div className="mb-5 mt-5">
          <Select onValueChange={(value) => setTargetLanguage(value)}>
            <SelectTrigger className="w-full md:w-[180px] shadow-sm border dark:border-gray-200 border-[#26292b]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> 
      </div>
    </div>
  );
};

export default AIComponent;
