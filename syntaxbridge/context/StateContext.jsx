"use client";

import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [language1, setLanguage1] = useState(null);
  const [language2, setLanguage2] = useState(null);

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
  };

  return (
    <StateContext.Provider
      value={{
        selectedConcept,
        setSelectedConcept,
        language1,
        setLanguage1,
        language2,
        setLanguage2,
        handleConceptClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
