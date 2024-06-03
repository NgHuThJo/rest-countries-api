// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./HomeLayout.module.css";

export function HomeLayout({
  className = "default",
  children,
}: ComponentBaseProps) {
  return (
    <section className={resolveClassName(className, styles)}>
      {children}
    </section>
  );
}
