// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
import { CombinedStyles } from "@/utils/className";
// Styles
import styles from "./Button.module.css";
import React, { HTMLAttributes } from "react";

type OmitClassName<T> = T extends HTMLAttributes<any>
  ? Omit<T, "className">
  : never;

type ButtonProps = OmitClassName<
  React.ButtonHTMLAttributes<HTMLButtonElement> | ComponentBaseProps
> & {
  className?: CombinedStyles | string;
};

export function Button({
  children,
  className,
  type = "button",
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={resolveClassName(className, styles)}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}
