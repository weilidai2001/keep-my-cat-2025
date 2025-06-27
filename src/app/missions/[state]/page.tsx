"use client";
import React from "react";
import SlideComponent from "@/components/slide";
import { StateKey } from "@/data/states";

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateId } = React.use(params);

  return <SlideComponent stateId={stateId as StateKey} />;
}
