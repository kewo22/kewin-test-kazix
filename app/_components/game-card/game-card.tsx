"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import { Match, MatchProbability } from "@/app/_interfaces/match";
import { Result } from "@/app/_enums/result";

import { MatchContext, MatchContextType } from "@/app/_store/game-context";

import { Button } from "../shared/button";

export default function GameCard(props: Match) {
  // const { league, matchDay, team1, team2, data } = props;
  const { matchProbabilities, updateMatches } = React.useContext(
    MatchContext
  ) as MatchContextType;

  const [match, setMatch] = useState<MatchProbability>();
  const [isInputVisible, setIsInputVisible] = useState("opacity-0 -z-10");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(Result.INIT);
  const [probability, setProbability] = useState(0);

  useEffect(() => {
    const match: MatchProbability = {
      ...props,
      amount: 0,
      probability: 0,
      result: Result.INIT,
    };
    setMatch(match);
  }, [props]);

  useEffect(() => {
    console.log(matchProbabilities);
  }, [matchProbabilities]);

  const handleClick = (result: number, probability: number) => {
    setResult(result);
    setProbability(probability);
    setIsInputVisible("opacity-100 z-10");
  };

  const handleCloseInput = () => {
    setResult(Result.INIT);
    setAmount(0);
    setIsInputVisible("opacity-0 -z-10");
  };

  const handleEnter = () => {
    // generating random scores for demo
    const score1 = Math.floor(Math.random() * 10);
    const score2 = Math.floor(Math.random() * 10);

    const updatedMatch: MatchProbability = {
      ...props,
      result,
      amount,
      probability,
      scores: [score1, score2],
    };
    updateMatches(updatedMatch);
    setTimeout(() => {
      setResult(Result.INIT);
      setAmount(0);
      setIsInputVisible("opacity-0 -z-10");
      setMatch(updatedMatch);
    }, 1000);
  };

  if (!match) {
    return (
      <div className="relative w-[400px] max-w-[400px] h-[200px] max-h-[200px] rounded-2xl bg-secondary-dark-200 px-3 py-3 flex flex-col justify-between">
        <div className="font-bold text-sm leading-normal flex items-center">
          <p className="w-1/2 h-5 bg-slate-600 animate-pulse rounded-lg"></p>
        </div>
        <div className="flex items-center">
          <p className="w-28 h-5 bg-slate-600 animate-pulse rounded-lg"></p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="w-48 h-5 bg-slate-600 animate-pulse rounded-lg"></p>
          <p className="w-48 h-5 bg-slate-600 animate-pulse rounded-lg"></p>
        </div>
        <div>
          <p className="w-10 h-5 bg-slate-600 animate-pulse rounded-lg"></p>
        </div>
        <div className="flex gap-3">
          <div className="flex-grow h-9 bg-slate-600 animate-pulse rounded-lg"></div>
          <div className="flex-grow h-9 bg-slate-600 animate-pulse rounded-lg"></div>
          <div className="flex-grow h-9 bg-slate-600 animate-pulse rounded-lg"></div>
          <div className="flex-grow h-9 bg-slate-600 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[400px] max-w-[400px] h-[200px] max-h-[200px] rounded-2xl bg-secondary-dark-200 px-3 py-3 flex flex-col justify-between">
      <div
        className={`absolute top-0 left-0 w-full flex flex-col items-center justify-center rounded-2xl bg-secondary-dark-800/95 h-full transition-all ${isInputVisible}`}
      >
        <Button
          size="xs"
          bg="bg-transparent"
          customclass="absolute top-0 right-0"
          onClick={handleCloseInput}
        >
          ×
        </Button>
        <p className="mb-2 text-lg font-bold leading-normal ">Enter Amount</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          className="w-3/4 text-secondary-dark-800 outline-none border-secondary-dark-950 p-3 rounded-md mb-2"
        />
        <Button onClick={handleEnter}>Enter</Button>
      </div>

      <div className="font-bold text-sm leading-normal flex items-center">
        <span className="icon-ball-2 mr-2"></span>
        <p>{match.league}</p>
      </div>

      <div className="flex items-center">
        <p className="font-normal text-xs text-secondary-light-950 mr-2">
          {match.matchDay}
        </p>
        <span className="icon-jersey mr-2"></span>
        <span className="icon-chart-1"></span>
      </div>

      <div className="flex flex-col gap-[5px]">
        <div className="flex">
          <Image
            src="/logo-1.png"
            alt="logo-1"
            height={20}
            width={20}
            className="mr-2"
          />
          <p className="font-normal text-sm">{match.team1}</p>
        </div>
        <div className="flex">
          <Image
            src="/logo-2.png"
            alt="logo-1"
            height={20}
            width={20}
            className="mr-2"
          />
          <p className="font-normal text-sm">{match.team2}</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-[13px] leading-[18px]">{match.data}</p>
      </div>

      <div className="flex gap-3">
        <Button
          customclass="flex-grow rounded-[100px]"
          size="sm"
          bg="bg-secondary-dark-500"
          isselectable={true}
          selected={match.result === 1}
          onClick={() => handleClick(Result.TEAM_1, +match.probabilities[0])}
        >
          <div className="flex justify-between items-center font-bold text-xs leading-4">
            <span>1</span> <span>{match.probabilities[0]}</span>
          </div>
        </Button>
        <Button
          customclass="flex-grow rounded-[100px]"
          size="sm"
          bg="bg-secondary-dark-500"
          isselectable={true}
          selected={match.result === 0}
          onClick={() => handleClick(Result.DRAW, +match.probabilities[1])}
        >
          <div className="flex justify-between items-center font-bold text-xs leading-4">
            <span>Draw</span> <span>{match.probabilities[1]}</span>
          </div>
        </Button>
        <Button
          customclass="flex-grow rounded-[100px]"
          size="sm"
          bg="bg-secondary-dark-500"
          isselectable={true}
          selected={match.result === 2}
          onClick={() => handleClick(Result.TEAM_2, +match.probabilities[2])}
        >
          <div className="flex justify-between items-center font-bold text-xs leading-4">
            <span>2</span> <span>{match.probabilities[2]}</span>
          </div>
        </Button>
        <Button
          customclass="rounded-[100px] px-1"
          bg="bg-secondary-dark-500"
          size="sm"
        >
          <span className="icon-arrow-down mx-1"></span>
        </Button>
      </div>
    </div>
  );
}
