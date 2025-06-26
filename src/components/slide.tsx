import React from "react";
import { states } from "@/data/states";
import Image from "next/image";
import { ControlsContainer } from "@/components/controls-container";
import Button from "@/components/ui/button";
import { JackInTheBox, Slide, Zoom, Flip } from "react-awesome-reveal";

const SlideComponent = ({ stateId }: { stateId: string }) => {
  const state = states[stateId];
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
          <Button href={state.choice1.destination} text={state.choice1.text} />
        )}
        {state.choice2 && (
          <Button href={state.choice2.destination} text={state.choice2.text} />
        )}
      </ControlsContainer>
    </div>
  );
};

export default SlideComponent;
