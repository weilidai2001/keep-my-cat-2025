import Button from "@/components/ui/button";
import { ControlsContainer } from "@/components/controls-container";

export default function Home() {
  return (
    <div>
      <main className="relative w-full pb-[100%] overflow-visible mt-[100px]">
        <img className="absolute w-full" src="/index.gif" />
      </main>
      <ControlsContainer>
        <Button href="/intro" text="START" />
      </ControlsContainer>
    </div>
  );
}
