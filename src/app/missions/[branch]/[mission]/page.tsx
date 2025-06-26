"use client";
import React from "react";
import { states, convertBranchMissionToFrameId } from "./states";
import Image from "next/image";
import { ControlsContainer } from "@/components/controls-container";
import Button from "@/components/ui/button";

const Mission = ({
  branchNumber,
  missionNumber,
}: {
  branchNumber: number;
  missionNumber: number;
}) => {
  const state =
    states[convertBranchMissionToFrameId(branchNumber, missionNumber)];
  return (
    <div>
      <div className="pt-[10px] mx-auto w-[310px] h-full text-[18px] leading-[1.3] z-[2] flex items-center justify-center text-center">
        <h1>{state.script}</h1>
      </div>
      <Image
        src={state.heroImageUrl}
        alt="hero image"
        width={500}
        height={500}
      />
      <ControlsContainer>
        <Button href="/missions/0/2" text="Play with the farmer" />
        <Button href="/missions/0/1" text="Play with the farmer" />
      </ControlsContainer>
    </div>
  );
};

export default function Page({
  params,
}: {
  params: Promise<{ branch: string; mission: string }>;
}) {
  const { branch, mission } = React.use(params);
  const branchNumber = Number(branch);
  const missionNumber = Number(mission);
  return <Mission branchNumber={branchNumber} missionNumber={missionNumber} />;
}
