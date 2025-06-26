"use client";
import React from "react";
import SlideComponent from "@/components/slide";

export default function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = React.use(params);
  return <SlideComponent stateId={state} />;
}
