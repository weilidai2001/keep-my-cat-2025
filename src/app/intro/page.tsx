"use client";
import React, { useEffect } from "react";
import SlideComponent from "@/components/slide";
import { useSessionBalance } from "@/hooks/useSessionBalance";

export default function Page() {
  const [_, setBalance] = useSessionBalance();
  useEffect(() => {
    setBalance(0);
  }, []);
  return <SlideComponent stateId={"intro1"} />;
}
