"use client";
import React from "react";
import SlideComponent from "@/components/slide";
import { getNextDestination, states } from "@/data/states";
import { useRouter } from "next/navigation";
import { getBalance, incrementBalance } from "@/api/balance-persistence";

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateId } = React.use(params);
  const router = useRouter();

  const handleChoiceButtonClick = (choiceKey: "choice1" | "choice2") => {
    const state = states[stateId];

    if (state.reward) {
      incrementBalance(state.reward);
    }

    const nextDestination = getNextDestination(
      state.isFinalMission,
      state.minimumBalance,
      getBalance(),
      state[choiceKey]
    );

    if (nextDestination) {
      router.push(nextDestination);
    }
  };

  return (
    <SlideComponent
      stateId={stateId}
      choice1ButtonClick={() => handleChoiceButtonClick("choice1")}
      choice2ButtonClick={() => handleChoiceButtonClick("choice2")}
    />
  );
}
