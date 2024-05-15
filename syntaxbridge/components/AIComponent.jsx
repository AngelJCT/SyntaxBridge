// AIComponent.js
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from "@/utils/vs2015";
import vs2015Dark from "@/utils/vs2015Dark";
import { useTheme} from 'next-themes'

const AIComponent = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputText, setOutputText] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("text");
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
        body: JSON.stringify({ code: inputCode }),
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
          className="w-full md:h-[400px] xs:h-[350px] p-2 font-mono md:text-lg xs:text-sm text-[#26292b] dark:text-[#f7f8f8] mb-2 bg-transparent border border-[#26292b15] dark:border-[#b7bdc220] focus:outline-none focus:ring-2 focus:ring-[#26292b] dark:focus:ring-[#f7f8f8] focus:ring-offset-2"
          value={inputCode}
          onChange={handleInputChange}
          placeholder="Write your code here..."
        />
        <Button onClick={handleSubmit} className="bg-[#26292b] dark:bg-[#f7f8f8] text-gray-100 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300 shadow-sm dark:shadow-none" disabled={isLoading}>
          {isLoading ? "Translating..." : "Translate"}
        </Button>
      </div>
      <div className="code-box-ai p-6">
        <pre  className="w-full xs:h-[416px] md:h-[400px] font-mono md:text-lg xs:text-sm text-[#26292b] dark:text-[#f7f8f8] bg-transparent border border-[#26292b15] dark:border-[#b7bdc220] break-words whitespace-pre-wrap overflow-auto">
            <SyntaxHighlighter language={language} style={isDarkMode ? vs2015Dark : vs2015} className="xs:h-[416px] md:h-[400px]">
                {outputCode}
             </SyntaxHighlighter>
        </pre>  
      </div>
    </div>
  );
};

export default AIComponent;
