import { IPhoneMockup } from "react-device-mockup";

const EmulatorFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IPhoneMockup screenWidth={360}>{children}</IPhoneMockup>
    </>
  );
};

export default EmulatorFrame;
