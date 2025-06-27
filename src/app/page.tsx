"use client";

import Button from "@/components/ui/button";
import { ControlsContainer } from "@/components/controls-container";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <main className="relative w-full pb-[100%] overflow-visible mt-[100px]">
        <img className="absolute w-full" src="/index.gif" />
      </main>
      <ControlsContainer>
        <Button text="START" onClick={() => router.push("/intro")} />
      </ControlsContainer>
    </div>
  );
}
