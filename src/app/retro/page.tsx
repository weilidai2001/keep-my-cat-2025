import Modal from "@/components/ui/modal";
import { getMissionStatesWithImages } from "@/data/states";

export default function Retro() {
  const statesWithImages = getMissionStatesWithImages();
  return (
    <div className="grid grid-cols-4 gap-4">
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
  );
}
