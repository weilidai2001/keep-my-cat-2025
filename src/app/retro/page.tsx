"use client";
import Modal from "@/components/ui/modal";
import { getMissionStatesWithImages } from "@/data/states";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<
    ReturnType<typeof getMissionStatesWithImages>[number] | undefined
  >(undefined);

  useEffect(() => {
    const visitedStates = getJourney();
    setStatesWithImages(getMissionStatesWithImages(visitedStates));
  }, []);

  return (
    <main className="pt-[100px]">
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        {selectedState && (
          <section>
            <img src={selectedState.heroImageUrl} alt="" />
            <p className="mt-2">{selectedState.retro}</p>
          </section>
        )}
      </Modal>
      <div className="grid grid-cols-5 gap-4">
        {statesWithImages.map((state, idx) => {
          return (
            <button
              key={idx}
              className={`aspect-square w-full ${
                state.visited ? "cursor-pointer btn-press-scale" : "opacity-20"
              }`}
              onClick={() => {
                if (state.visited) {
                  setSelectedState(state);
                  setShowModal(true);
                }
              }}
            >
              <img
                src={state.heroImageUrl}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
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
