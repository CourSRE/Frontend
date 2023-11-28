import Image from "next/image";
import React from "react";

type TProps = {
  searchIcon?: React.ReactNode;
  fullWidth?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  label?: string;
  className?: string;
  type?: "number" | "text" | "file" | "password";
  [x: string]: any;
};

export const TextInput: React.FC<TProps> = ({
  searchIcon,
  fullWidth,
  placeholder,
  className,
  onChange,
  value,
  label,
  type = 'text',
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${fullWidth && "w-full"} ${className}`}
    >
      <label className="text-gray-700 text-xs">{label}</label>
      <div
        className={`flex gap-3 px-[18px] py-[12px] w-full bg-white border-[1px] border-gray-200 text-gray-900`}
      >
        {searchIcon && (
          <Image
            src="/icons/magnifying-glass.svg"
            alt=""
            width={24}
            height={24}
          />
        )}
        <input
          placeholder={placeholder}
          className="focus:outline-none w-full"
          onChange={onChange}
          type={type}
          value={value}
        />
        {type === 'password' && (
          <Image
            src="/icons/eye.svg"
            alt=""
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
