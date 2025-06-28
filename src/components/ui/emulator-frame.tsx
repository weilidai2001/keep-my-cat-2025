import { IPhoneMockup } from "react-device-mockup";

interface EmulatorFrameProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

const EmulatorFrame = ({ children, isMobile }: EmulatorFrameProps) => {
  return isMobile ? (
    <>{children}</>
  ) : (
    <IPhoneMockup screenWidth={360}>{children}</IPhoneMockup>
  );
};

export default EmulatorFrame;
