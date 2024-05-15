"use client";

import React, { useState } from "react";
import SyntaxBridge from "./SyntaxBridge";
import Header from "./Header";

const App = () => {
  const [selectedConcept, setSelectedConcept] = useState("loops");
  const [language1, setLanguage1] = useState("javascript");
  const [language2, setLanguage2] = useState("python");

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
  };

  return (
    <>
      <SyntaxBridge
        selectedConcept={selectedConcept}
        setSelectedConcept={setSelectedConcept}
        language1={language1}
        setLanguage1={setLanguage1}
        language2={language2}
        setLanguage2={setLanguage2}
      />
    </>
  );
};

export default App;
