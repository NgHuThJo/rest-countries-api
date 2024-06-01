// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Main.module.css";

export function Main({
  children,
  className,
  ...restProps
}: ComponentBaseProps) {
  return (
    <main className={resolveClassName(className, styles)} {...restProps}>
      {children}
    </main>
  );
}
