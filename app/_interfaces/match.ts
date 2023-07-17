import { Result } from "../_enums/result";

export interface Match {
  id: number;
  league: string;
  team1: string;
  team2: string;
  matchDay: string;
  data: string;
  probabilities: string[];
  scores: number[];
}

export interface MatchProbability extends Match {
  result: Result;
  probability: number;
  amount: number;
}
