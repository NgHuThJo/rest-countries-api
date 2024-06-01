// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { GenericObject } from "@/types";
// Styles
import styles from "./Paragraph.module.css";

export function Paragraph({
  children,
  className,
  ...restProps
}: GenericObject) {
  return (
    <p className={resolveClassName(className, styles)} {...restProps}>
      {children}
    </p>
  );
}
