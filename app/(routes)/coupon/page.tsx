"use client";

import React from "react";

import { MatchContext, MatchContextType } from "@/app/_store/game-context";

export default function Coupon() {
  const { matchProbabilities } = React.useContext(
    MatchContext
  ) as MatchContextType;
  console.log(matchProbabilities);

  let totalValue = 0;
  let totalWins = 0;

  matchProbabilities.forEach((obj) => {
    const max = Math.max(...obj.scores);
    const index = obj.scores.indexOf(max);
    if (obj.result === index + 1) {
      totalWins++;
      const value = obj.probability * obj.amount;
      totalValue += value;
    }
  });

  return (
    <section className={`h-screen grid place-items-center`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-3">
          <div className="rounded-lg bg-secondary-dark-50 p-5 flex">
            <span className="icon-user text-5xl mr-3"></span>
            <div>
              <p>Kewin</p>
              <p>Fernando</p>
            </div>
          </div>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead className="bg-secondary-dark-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase"
                      >
                        Matches
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-1 text-xs font-medium tracking-wider text-center text-white uppercase"
                      >
                        Choice
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {!matchProbabilities.length && (
                      <tr className="hover:bg-gray-100 h-80">
                        <td
                          colSpan={3}
                          className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-center"
                        >
                          No bets yet
                        </td>
                      </tr>
                    )}

                    {matchProbabilities.map((obj, i) => {
                      return (
                        <tr key={i} className="hover:bg-gray-100">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-right">
                            <div className="grid grid-cols-[auto_20px]">
                              <p className="">{obj.team1}</p>
                              <p className="font-bold">{obj.scores[0]}</p>
                              <p>{obj.team2}</p>
                              <p className="font-bold">{obj.scores[1]}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-center">
                            {obj.result}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-center">
                            ${obj.amount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>

                  <tfoot className="bg-secondary-dark-50">
                    <tr>
                      <td className="py-3 px-6" colSpan={3}>
                        <div className="w-96 ml-auto grid grid-cols-[auto_auto] text-right gap-x-5">
                          <p>Successful predictions</p>
                          <p className="font-bold">{totalWins}</p>
                          <p>Total Amount</p>
                          <p className="font-bold">
                            $ {Math.round(totalValue)}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
