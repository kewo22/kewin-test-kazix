"use client";

import Link from "next/link";

import GameCard from "../_components/game-card/game-card";
import { GameTitleBar } from "../_components/game-title-bar/game-title-bar";
import HeighLightCard from "../_components/highlight-card/heighlight-card";

import { Match } from "../_interfaces/match";

export default function Home() {
  const plMatches: Match[] = [
    {
      id: 1,
      league: "English Premier League",
      team1: "Arsenal",
      team2: "Aston Villa",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 2,
      league: "English Premier League",
      team1: "Bournemouth",
      team2: "Brentford",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 3,
      league: "English Premier League",
      team1: "Brighton & Hove Albion",
      team2: "Burnley",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 4,
      league: "English Premier League",
      team1: "Chelsea",
      team2: "Crystal Palace",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 4,
      league: "English Premier League",
      team1: "Everton",
      team2: "Fulham",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 5,
      league: "English Premier League",
      team1: "Liverpool",
      team2: "Luton Town",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 6,
      league: "English Premier League",
      team1: "Manchester City",
      team2: "Manchester United",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 7,
      league: "English Premier League",
      team1: "Newcastle United",
      team2: "Nottingham Forest",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 8,
      league: "English Premier League",
      team1: "Tottenham Hotspur",
      team2: "West Ham United",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 9,
      league: "English Premier League",
      team1: "Wolverhampton Wanderers",
      team2: "Burnley",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 10,
      league: "English Premier League",
      team1: "Chelsea",
      team2: "Manchester United",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
  ];

  const laLiga: Match[] = [
    {
      id: 1,
      league: "La Liga",
      team1: "Athletic Bilbao",
      team2: "Atlético Madrid",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 2,
      league: "La Liga",
      team1: "Barcelona",
      team2: "Cádiz",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 3,
      league: "La Liga",
      team1: "Celta Vigo",
      team2: "Getafe",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 4,
      league: "La Liga",
      team1: "Granada",
      team2: "Girona",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 4,
      league: "La Liga",
      team1: "Las Palmas",
      team2: "Mallorca",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 5,
      league: "La Liga",
      team1: "Real Madrid",
      team2: "Real Sociedad",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 6,
      league: "La Liga",
      team1: "Sevilla",
      team2: "Valencia",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
    {
      id: 7,
      league: "La Liga",
      team1: "Villarreal",
      team2: "Sevilla",
      matchDay: "Today, 21:30",
      data: "1X2",
      probabilities: ["2.3", "2.3", "2.3"],
      scores: [0, 0],
    },
  ];

  const onViewAllClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
    return;
  };
  const onLeftArrowClick = (e: any) => {
    console.log(e);
    return;
  };
  const onRightArrowClick = (e: any) => {
    console.log(e);
    return;
  };

  return (
    <main className="">
      <div className="flex justify-end w-full py-2 px-5 bg-secondary-dark-50 mb-3 rounded-lg">
        <Link
          href="/coupon"
          className="text-sm hover:bg-primary hover:text-secondary-dark-50 p-2 rounded-md border border-primary transition-all"
        >
          View Coupon
        </Link>
      </div>

      <div className="flex gap-5 mb-3">
        {/* HARDCODED FOR DEMO */}
        <HeighLightCard />
        <HeighLightCard />
      </div>

      <div className="my-5">
        <GameTitleBar
          title="English Premier League"
          onViewAllClick={onViewAllClick}
          onLeftArrowClick={onLeftArrowClick}
          onRightArrowClick={onRightArrowClick}
        />
      </div>

      <div className="grid grid-cols-3 gap-5 w-5/6 mb-3">
        {plMatches.map((match, i) => {
          return <GameCard key={i} {...match} />;
        })}
      </div>

      <div className="my-5">
        <GameTitleBar
          title="La Liga"
          onViewAllClick={onViewAllClick}
          onLeftArrowClick={onLeftArrowClick}
          onRightArrowClick={onRightArrowClick}
        />
      </div>

      <div className="grid grid-cols-3 gap-5 w-5/6 mb-3">
        {laLiga.map((match, i) => {
          return <GameCard key={i} {...match} />;
        })}
      </div>
    </main>
  );
}
