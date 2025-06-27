"use client";
import React from "react";
import SlideComponent from "@/components/slide";
import { useSessionBalance } from "@/hooks/useSessionBalance";
import { states } from "@/data/states";
import type { MissionState, StateChoice } from "@/data/states";
import { useRouter } from "next/navigation";

function getNextStateId(
  isFinalMission: MissionState["isFinalMission"],
  minimumBalance: MissionState["minimumBalance"],
  balance: number | null,
  choice?: StateChoice
): string | undefined {
  const wonStateId = "won";
  const lostStateId = "lost";

  let nextStateId;
  if (isFinalMission) {
    if (balance >= 5000) {
      nextStateId = wonStateId;
    } else {
      nextStateId = lostStateId;
    }
  } else if (balance <= (minimumBalance ?? -1)) {
    nextStateId = lostStateId;
  } else if (balance >= 5000) {
    nextStateId = wonStateId;
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

  const primaryButtonClick = () => {
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

    const nextStateId = getNextStateId(
      states[stateId].isFinalMission,
      states[stateId].minimumBalance,
      balance,
      states[stateId].choice1
    );
    if (nextStateId) {
      router.push(`/missions/${nextStateId}`);
    }
  };

  return (
    <SlideComponent stateId={stateId} primaryButtonClick={primaryButtonClick} />
  );
}
