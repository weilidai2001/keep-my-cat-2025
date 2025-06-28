"use client";
import { IPhoneMockup } from "react-device-mockup";
import { useMediaQuery } from "./useMediaQuery";

const EmulatorFrame = ({ children }: { children: React.ReactNode }) => {
  const isWide = useMediaQuery("(min-width: 500px)");
  return isWide ? (
    <IPhoneMockup screenWidth={360}>{children}</IPhoneMockup>
  ) : (
    <>{children}</>
  );
};

export default EmulatorFrame;
