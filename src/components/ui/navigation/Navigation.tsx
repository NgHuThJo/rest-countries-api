// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Navigation.module.css";

export function Navigation({
  children,
  className = "default",
  ...restProps
}: ComponentBaseProps) {
  return (
    <nav className={resolveClassName(className, styles)} {...restProps}>
      {children}
    </nav>
  );
}
