// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Button.module.css";

type ButtonProps = ComponentBaseProps & {
  type?: "submit" | "reset" | "button";
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
