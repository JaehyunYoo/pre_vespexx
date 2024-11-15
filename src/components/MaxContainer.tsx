import React from "react";

const MaxContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full lg:container-xl ${className || ""}`}>
      {children}
    </div>
  );
};

export default MaxContainer;
