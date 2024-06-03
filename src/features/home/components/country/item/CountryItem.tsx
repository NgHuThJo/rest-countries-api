// Custom hooks
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./CountryItem.module.css";

export function CountryItem({
  className = "default",
  children,
}: ComponentBaseProps) {
  const { ref, isInView } = useIntersectionObserver();

  return (
    <li className={resolveClassName(className, styles)} ref={ref}>
      {isInView ? children : null}
    </li>
  );
}
