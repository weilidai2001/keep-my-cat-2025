"use client";
import React from "react";
import { states } from "./states";
import Image from "next/image";
import { ControlsContainer } from "@/components/controls-container";
import Button from "@/components/ui/button";

const Mission = ({ stateId }: { stateId: string }) => {
  const state = states[stateId];
  return (
    <div>
      <div className="pt-[10px] mx-auto w-[310px] h-full text-[18px] leading-[1.3] z-[2] flex items-center justify-center text-center">
        {state.script && <h1>{state.script}</h1>}
      </div>
      <Image
        src={state.heroImageUrl}
        alt="hero image"
        width={500}
        height={500}
      />
      <ControlsContainer>
        {state.choice1 && (
          <Button href={state.choice1.destination} text={state.choice1.text} />
        )}
        {state.choice2 && (
          <Button href={state.choice2.destination} text={state.choice2.text} />
        )}
      </ControlsContainer>
    </div>
  );
};

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = React.use(params);
  return <Mission stateId={state} />;
}
