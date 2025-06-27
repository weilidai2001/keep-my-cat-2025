"use client";
import React, { useEffect } from "react";
import SlideComponent from "@/components/slide";
import { resetBalance } from "@/api/balance-persistence";

export default function Page() {
  useEffect(() => {
    resetBalance();
  }, []);

  return <SlideComponent stateId={"intro1"} />;
}
