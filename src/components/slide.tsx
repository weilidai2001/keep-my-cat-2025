import React from "react";
import { getState, StateKey } from "@/data/states";
import Image from "next/image";
import { ControlsContainer } from "@/components/controls-container";
import Button from "@/components/ui/button";
import { JackInTheBox, Slide, Zoom, Flip } from "react-awesome-reveal";
import { getNextDestination } from "@/data/states";
import { getBalance, incrementBalance } from "@/api/balance-persistence";
import { useRouter } from "next/navigation";

const SlideComponent = ({ stateId }: { stateId: StateKey }) => {
  const state = getState(stateId);
  const router = useRouter();

  const handleChoiceButtonClick = (choiceKey: "choice1" | "choice2") => {
    const typedStateId = stateId as StateKey;
    const state = getState(typedStateId);

    if (state.reward) {
      incrementBalance(state.reward);
    }

    const nextDestination = getNextDestination(
      state.isFinalMission,
      state.minimumBalance,
      getBalance(),
      typedStateId,
      state[choiceKey]
    );

    if (nextDestination) {
      router.push(nextDestination as StateKey);
    }
  };

  return (
    <div>
      <div className="py-[10px] mx-auto w-[310px] h-[100px] text-[18px] leading-[1.3] z-[2] flex items-center justify-center text-center">
        {state.script && (
          <h1
            className="text-center"
            dangerouslySetInnerHTML={{ __html: state.script }}
          />
        )}
      </div>
      <>
        {state.animation === "jackInTheBox" ? (
          <JackInTheBox key={state.heroImageUrl}>
            <Image
              src={state.heroImageUrl}
              alt="hero image"
              width={500}
              height={500}
            />
          </JackInTheBox>
        ) : state.animation === "slide" ? (
          <Slide key={state.heroImageUrl} triggerOnce>
            <Image
              src={state.heroImageUrl}
              alt="hero image"
              width={500}
              height={500}
            />
          </Slide>
        ) : state.animation === "flip" ? (
          <Flip key={state.heroImageUrl} triggerOnce>
            <Image
              src={state.heroImageUrl}
              alt="hero image"
              width={500}
              height={500}
            />
          </Flip>
        ) : state.animation === "zoomIn" ? (
          <Zoom key={state.heroImageUrl} triggerOnce>
            <Image
              src={state.heroImageUrl}
              alt="hero image"
              width={500}
              height={500}
            />
          </Zoom>
        ) : (
          <Image
            src={state.heroImageUrl}
            alt="hero image"
            width={500}
            height={500}
          />
        )}
      </>
      <ControlsContainer>
        {state.choice1 && (
          <Button
            text={state.choice1.text}
            onClick={() => handleChoiceButtonClick("choice1")}
          />
        )}
        {state.choice2 && (
          <Button
            text={state.choice2.text}
            onClick={() => handleChoiceButtonClick("choice2")}
          />
        )}
      </ControlsContainer>
    </div>
  );
};

export default SlideComponent;
