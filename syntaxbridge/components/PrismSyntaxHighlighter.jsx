import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="w-full h-[400px] p-1 font-mono md:text-lg xs:text-sm text-[#26292b] dark:text-[#f7f8f8] bg-transparent overflow-auto break-words whitespace-pre-wrap">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;