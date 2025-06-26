import React from "react";

export function ControlsContainer({ children }: { children: React.ReactNode }) {
  const count = React.Children.count(children);
  return (
    <footer
      className={`flex justify-center items-center relative pt-[20px] ${
        count > 1 ? "flex-col gap-[10px]" : ""
      }`}
    >
      {children}
    </footer>
  );
}
