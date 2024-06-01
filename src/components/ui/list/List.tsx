// Types
import { ComponentBaseProps } from "@/types";
// Utility
import { resolveClassName } from "@/utils/className";
// Styles
import styles from "./List.module.css";

export function List({
  children,
  className,
  ...restProps
}: ComponentBaseProps) {
  return (
    <ul className={resolveClassName(className, styles)} {...restProps}>
      {children}
    </ul>
  );
}
