"use client";
import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

// Mocked functions for now
const getBalance = () => {
  return 1000;
};
const getPreviouslyShownBalance = () => {
  return 1000;
};
const setPreviouslyShownBalance = (balance: number) => {};

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

const renderMission = (
  thisBranch: number,
  thisMission: number,
  latestBranch: number,
  latestMission: number
) => {
  if (thisMission === latestMission && thisBranch === latestBranch) {
    return (
      <a href={`/missions/${latestBranch}/${latestMission}`}>
        <img
          className="rounded-full animate-flare" // NOTE: Add 'flare' keyframes to tailwind.config.js
          src={"/dashboard_mission_active.png"}
        />
      </a>
    );
  } else if (
    isMissionAccomplished(thisBranch, thisMission, latestBranch, latestMission)
  ) {
    return <img src={"/dashboard_mission_completed.png"} />;
  } else {
    return <img src={"/dashboard_mission_incomplete.png"} />;
  }
};

const renderPath = () => (
  <img className="w-[5px] h-[5px]" src={"/dashboard_mission_path.png"} />
);

const renderQuestionMark = () => (
  <img src={"/dashboard_mission_question_mark.png"} />
);

// Dashboard now just takes branchNumber and missionNumber as props
const Dashboard = ({
  branchNumber,
  missionNumber,
}: {
  branchNumber: number;
  missionNumber: number;
}) => {
  const [balance, setBalance] = useState<number>(getPreviouslyShownBalance());
  const [showBalance, setShowBalance] = useState<boolean>(false);

  useEffect(() => {
    const balance = getBalance();
    setPreviouslyShownBalance(balance);
    setBalance(balance);
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
          } else if (tileNum === 4) {
            content = renderMission(3, 6, branchNumber, missionNumber);
          } else if (tileNum === 7) {
            content = renderMission(3, 5, branchNumber, missionNumber);
          } else if (tileNum === 31) {
            content = renderMission(4, 2, branchNumber, missionNumber);
          } else if (tileNum === 34) {
            content = renderMission(0, 1, branchNumber, missionNumber);
          } else if (tileNum === 37) {
            content = renderMission(3, 4, branchNumber, missionNumber);
          } else if (tileNum === 61) {
            content = renderMission(4, 3, branchNumber, missionNumber);
          } else if (tileNum === 64) {
            content = renderMission(1, 2, branchNumber, missionNumber);
          } else if (tileNum === 67) {
            content = renderMission(3, 3, branchNumber, missionNumber);
          } else if (tileNum === 70) {
            content = renderMission(2, 6, branchNumber, missionNumber);
          } else if (tileNum === 94) {
            content = renderMission(2, 3, branchNumber, missionNumber);
          } else if (tileNum === 97) {
            content = renderMission(2, 4, branchNumber, missionNumber);
          } else if (tileNum === 100) {
            content = renderMission(2, 5, branchNumber, missionNumber);
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
            min-[350px]:left-[175px] 
          `}
          style={{ opacity: showBalance ? 1 : 0 }}
          onClick={() => setShowBalance((prev) => !prev)}
        >
          <span>
            £
            <span>
              <AnimatedNumbers animateToNumber={balance} />
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
  params: Promise<{ branch: string; mission: string }>;
}) {
  const { branch, mission } = React.use(params);
  const branchNumber = Number(branch);
  const missionNumber = Number(mission);
  return (
    <Dashboard branchNumber={branchNumber} missionNumber={missionNumber} />
  );
}
