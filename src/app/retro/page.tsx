"use client";
import Modal from "@/components/ui/modal";
import { getMissionStatesWithImages, StateKey } from "@/data/states";
import Button from "@/components/ui/button";
import { ControlsContainer } from "@/components/controls-container";
import { getJourney } from "@/api/journey-persistence";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Retro() {
  const router = useRouter();
  const [statesWithImages, setStatesWithImages] = useState<
    ReturnType<typeof getMissionStatesWithImages>
  >([]);

  useEffect(() => {
    const visitedStates = getJourney();
    setStatesWithImages(getMissionStatesWithImages(visitedStates));
  }, []);

  return (
    <main className="pt-[100px]">
      <div className="grid grid-cols-5 gap-4">
        {statesWithImages.map((state, idx) => {
          return (
            <div
              key={idx}
              className={`aspect-square w-full ${
                state.visited ? "" : "opacity-20"
              }`}
            >
              <img
                src={state.heroImageUrl}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <ControlsContainer>
        <h2>(Tap on each thumbnail to review your journey)</h2>
        <Button
          text="PLAY AGAIN"
          onClick={() => {
            router.push("/");
          }}
        />
      </ControlsContainer>
    </main>
  );
}
