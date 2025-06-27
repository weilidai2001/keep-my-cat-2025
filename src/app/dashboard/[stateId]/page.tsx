"use client";
import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";
import { getBalance } from "@/api/balance-persistence";
import { getState, StateKey } from "@/data/states";

// Helper functions
const isMissionAccomplished = (
  thisBranch: number,
  thisMission: number,
  latestBranch: number,
  latestMission: number
) => {
  if (thisBranch === 0 && latestBranch > 0) {
    return true;
  } else if (thisBranch === 1 && (latestBranch === 2 || latestBranch === 3)) {
    return true;
  } else if (thisBranch === latestBranch && thisMission < latestMission) {
    return true;
  }
  return false;
};

const renderMission = (tileId: number, stateId: StateKey) => {
  const state = getState(stateId);
  if (tileId === state.tileId) {
    return (
      <a href={`/missions/${stateId}`}>
        <Image
          className="rounded-full animate-flare"
          src={"/dashboard_mission_active.png"}
          alt="mission active"
          width={30}
          height={30}
        />
      </a>
    );
  }
  // else if (
  //   isMissionAccomplished(thisBranch, thisMission, latestBranch, latestMission)
  // ) {
  //   return (
  //     <Image
  //       src={"/dashboard_mission_completed.png"}
  //       alt="mission completed"
  //       width={30}
  //       height={30}
  //     />
  //   );
  // }
  else {
    return (
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
        <img src={"/dashboard_title.png"} className="w-3/5" />
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
        <img className="h-full" src={"/dashboard_arm.jpg"} />
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
  params: Promise<{ stateId: string }>;
}) {
  const { stateId } = React.use(params);
  return <Dashboard stateId={stateId as StateKey} />;
}
