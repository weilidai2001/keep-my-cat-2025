import Modal from "@/components/ui/modal";
import { getMissionStatesWithImages } from "@/data/states";
import Button from "@/components/ui/button";
import { ControlsContainer } from "@/components/controls-container";

export default function Retro() {
  const statesWithImages = getMissionStatesWithImages();
  return (
    <main className="pt-[100px]">
      <div className="grid grid-cols-5 gap-4">
        {statesWithImages.map((state, idx) => {
          return (
            <div key={idx} className="aspect-square w-full">
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
        <Button text="PLAY AGAIN" />
      </ControlsContainer>
    </main>
  );
}
