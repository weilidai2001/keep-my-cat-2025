"use client";
import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";
import { getBalance } from "@/api/balance-persistence";
import { getState, tileIsMission, StateKey } from "@/data/states";
import { getPreviousStates } from "@/data/states";

const isMissionAccomplished = (currentTileId: number, stateId: StateKey) => {
  const completedStates = getPreviousStates("mission_b0m1", stateId, getState);
  return completedStates.some(({ tileId }) => tileId === currentTileId);
};

const renderMission = (tileId: number, stateId: StateKey) => {
  const state = getState(stateId);
  if (tileId === state.tileId) {
    return (
      <a href={`/missions/${stateId}`}>
        <Image
          className="rounded-full animate-flare btn-press-scale cursor-pointer"
          src={"/dashboard_mission_active.png"}
          alt="mission active"
          width={30}
          height={30}
        />
      </a>
    );
  } else if (tileIsMission(tileId)) {
    return isMissionAccomplished(tileId, stateId) ? (
      <Image
        src={"/dashboard_mission_completed.png"}
        alt="mission completed"
        width={30}
        height={30}
      />
    ) : (
      <Image
        src={"/dashboard_mission_incomplete.png"}
        alt="mission incomplete"
        width={30}
        height={30}
      />
    );
  }
};

const renderPath = () => (
  <Image
    className="w-[5px] h-[5px]"
    src={"/dashboard_mission_path.png"}
    alt="mission path"
    width={5}
    height={5}
  />
);

const renderQuestionMark = () => (
  <Image
    src={"/dashboard_mission_question_mark.png"}
    alt="mission question mark"
    width={30}
    height={30}
  />
);

const Dashboard = ({ stateId }: { stateId: StateKey }) => {
  const [showBalance, setShowBalance] = useState<boolean>(false);

  useEffect(() => {
    setShowBalance(true);
  }, []);

  return (
    <div className="w-full">
      <header className="flex justify-center items-center h-20">
        <Image
          src={"/dashboard_title.png"}
          alt="dashboard title"
          width={692}
          height={122}
          className="w-3/5"
        />
      </header>
      <div className="flex flex-wrap w-[300px] mx-auto pb-[15px] text-2xl">
        {Array.from({ length: 100 }, (_, i) => {
          const tileNum = i + 1;
          let content = null;
          if ([1, 40, 91].includes(tileNum)) {
            content = renderQuestionMark();
          } else if (
            [
              2, 3, 5, 6, 17, 27, 32, 33, 41, 44, 47, 50, 51, 54, 57, 60, 65,
              66, 71, 74, 80, 81, 84, 90, 95, 96, 98, 99,
            ].includes(tileNum)
          ) {
            content = renderPath();
          } else {
            content = renderMission(tileNum, stateId);
          }
          return (
            <div
              key={tileNum}
              data-tile={tileNum}
              className="w-[30px] h-[30px] relative flex items-center justify-center"
            >
              {content}
            </div>
          );
        })}
      </div>
      <div className="relative h-[150px] max-[349px]:h-[130px]">
        <Image
          className="h-full"
          src={"/dashboard_arm.jpg"}
          alt="arm"
          width={351}
          height={150}
        />
        <div
          className={`
            absolute text-[16px] tracking-[3px] top-[34%] left-[46%] w-[75px] h-[50px] flex justify-center items-center bg-white
            min-[350px]:left-[175px] cursor-pointer
          `}
          style={{ opacity: showBalance ? 1 : 0 }}
          onClick={() => setShowBalance((prev) => !prev)}
        >
          <span>
            £
            <span>
              <AnimatedNumbers animateToNumber={getBalance()} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

// Next.js page component that receives params from the route
export default function Page({
  params,
}: {
  params: { stateId: string };
}) {
  const { stateId } = params;
  return <Dashboard stateId={stateId as StateKey} />;
}
