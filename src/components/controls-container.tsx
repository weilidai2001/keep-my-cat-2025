import React from "react";

export function ControlsContainer({ children }: { children: React.ReactNode }) {
  return <footer className="flex justify-center">{children}</footer>;
}
