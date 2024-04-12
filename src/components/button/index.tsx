import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: any;
  icon?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className="px-9 py-4 rounded-lg flex items-center bg-[#2A2C32] text-white space-x-1">
      {props.children}
      {props.icon}
    </div>
  );
};
