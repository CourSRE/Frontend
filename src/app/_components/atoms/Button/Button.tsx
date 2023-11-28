import React, { MouseEventHandler } from "react";

type TProps = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<TProps> = ({
  className,
  type = "button",
  children,
  onClick,
  fullWidth,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center px-6 py-3 hover:opacity-80 active:opacity-50 ${
        variant === "primary"
          ? "bg-primary-base text-white"
          : "bg-primary-100 text-primary-base"
      } ${fullWidth ? "w-full" : "w-fit"} ${className}`}
    >
      {children}
    </button>
  );
};
