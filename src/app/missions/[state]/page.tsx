"use client";
import React from "react";
import SlideComponent from "@/components/slide";
import { useSessionBalance } from "@/hooks/useSessionBalance";
import { states } from "@/data/states";

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = React.use(params);
  const [balance, setBalance] = useSessionBalance();
  const primaryButtonClick = () => {
    const { reward } = states[state];
    if (reward) {
      const currentBalance = balance;
      if (!currentBalance) {
        setBalance(reward);
      } else {
        const newBalance = currentBalance + reward;
        setBalance(newBalance);
      }
    }
  };

  return (
    <SlideComponent stateId={state} primaryButtonClick={primaryButtonClick} />
  );
}
