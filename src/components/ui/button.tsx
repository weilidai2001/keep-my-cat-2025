"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block text-center cursor-pointer outline-none text-black bg-transparent border border-black rounded-[15px] uppercase px-[15px] py-[5px] text-[18px] mx-auto shadow-[2px_2px_2px_rgba(0,0,0,0.2)]"
    >
      {text}
    </button>
  );
};

export default Button;
