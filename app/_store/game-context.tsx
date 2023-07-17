"use client";

import { ReactNode, createContext, useState } from "react";

import { MatchProbability } from "../_interfaces/match";

export type MatchContextType = {
  matchProbabilities: MatchProbability[];
  updateMatches: (match: MatchProbability) => void;
};

export const MatchContext = createContext<MatchContextType | null>(null);

const MatchProvider = ({ children }: { children: ReactNode }) => {
  const [matchProbabilities, setMatchProbabilities] = useState<
    MatchProbability[]
  >([]);

  const updateMatches = (match: MatchProbability) => {
    const tempMatchProbabilities = [...matchProbabilities];
    const index = tempMatchProbabilities.findIndex((obj) => {
      return obj.id === match.id;
    });
    if (index !== -1) {
      tempMatchProbabilities.splice(index, 1, match);
    } else {
      tempMatchProbabilities.push(match);
    }
    setMatchProbabilities(tempMatchProbabilities);
  };

  return (
    <MatchContext.Provider value={{ matchProbabilities, updateMatches }}>
      {children}
    </MatchContext.Provider>
  );
};

export default MatchProvider;
