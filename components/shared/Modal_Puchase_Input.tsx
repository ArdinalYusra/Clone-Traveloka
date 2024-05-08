"use client";

import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Modal_Puchase_Input = (props: Props) => {
  const { children, className } = props;
  return (
    <div className="relative h-[430px]">
      <div className="wrapper flex-center flex-col absolute left-[10%] -top-[12%] h-full w-full py-5">
        {children}
      </div>
    </div>
  );
};

export default Modal_Puchase_Input;
