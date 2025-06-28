"use client";
import React, { useEffect } from "react";
import SlideComponent from "@/components/slide";
import { StateKey } from "@/data/states";
import { addToJourney } from "@/api/journey-persistence";

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateId } = React.use(params);

  useEffect(() => {
    addToJourney(stateId as StateKey);
  }, []);

  return <SlideComponent stateId={stateId as StateKey} />;
}
