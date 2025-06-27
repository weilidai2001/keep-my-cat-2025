"use client";
import React from "react";
import SlideComponent from "@/components/slide";
import { useSessionBalance } from "@/hooks/useSessionBalance";
import { states } from "@/data/states";
import type { MissionState, StateChoice } from "@/data/states";
import { useRouter } from "next/navigation";

function getNextDestination(
  isFinalMission: MissionState["isFinalMission"],
  minimumBalance: MissionState["minimumBalance"],
  balance: number | null,
  choice?: StateChoice
): string | undefined {
  const wonDestination = "/missions/won";
  const lostDestination = "/missions/lost";

  let nextStateId;
  if (isFinalMission) {
    if (balance && balance >= 5000) {
      nextStateId = wonDestination;
    } else {
      nextStateId = lostDestination;
    }
  } else if (balance && balance <= (minimumBalance ?? -1)) {
    nextStateId = lostDestination;
  } else if (balance && balance >= 5000) {
    nextStateId = wonDestination;
  } else if (choice) {
    nextStateId = choice.destination;
  }

  return nextStateId;
}

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateId } = React.use(params);
  const [balance, setBalance] = useSessionBalance();
  const router = useRouter();

  const handleChoiceButtonClick = (choiceKey: "choice1" | "choice2") => {
    // Add reward to balance
    const { reward } = states[stateId];
    if (reward) {
      const currentBalance = balance;
      if (!currentBalance) {
        setBalance(reward);
      } else {
        const newBalance = currentBalance + reward;
        setBalance(newBalance);
      }
    }

    const nextDestination = getNextDestination(
      states[stateId].isFinalMission,
      states[stateId].minimumBalance,
      balance,
      states[stateId][choiceKey]
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
