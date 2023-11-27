import React from "react";

type TProps = {
  className?: string;
  childrenClassName?: string;
  children?: React.ReactNode;
};

export const MainContainer: React.FC<TProps> = ({ className, children, childrenClassName }) => {
  return (
    <section className={`py-4 px-4 ${className}`}>
      <div className={`container mx-auto ${childrenClassName}`}>{children}</div>
    </section>
  );
};
