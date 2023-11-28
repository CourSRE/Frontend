import React from "react";

type TProps = {
  fullWidth?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  [x: string]: any;
};

export const OptionInput: React.FC<TProps> = ({
  fullWidth,
  placeholder,
  className,
  onChange,
  value,
  label,
  children,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${fullWidth && "w-full"} ${className}`}
    >
      <label className="text-gray-600 text-xs">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="px-[20px] py-[12px] bg-white border-[1px] border-gray-100 text-gray-600 cursor-pointer"
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};
