import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "Primary" | "Underline";
  children: any;
  icon?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className="cursor-pointer">
      {props.variant === "Primary" ? (
        <div className="px-9 py-4 rounded-lg flex items-center bg-[#2A2C32] text-white space-x-1 cursor-pointer">
          {props.children}
          {props.icon}
        </div>
      ) : (
        <div className="group">
          <div className="flex items-center space-x-2 font-bold pb-1">
            <p> {props.children} </p>
            <FaArrowRight size={20} color="white" />
          </div>
          <div className="w-0 bg-white h-[2px]  transition-all duration-300 group-hover:w-full " />
        </div>
      )}
    </div>
  );
};
