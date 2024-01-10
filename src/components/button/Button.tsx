import clsx from "clsx";
import React from "react";

import "./Button.css";

import type { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  const baseProps = {
    className: clsx("Button", className),
  };
  return <div {...baseProps}>{children}</div>;
}
