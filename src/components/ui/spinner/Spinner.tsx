// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Spinner.module.css";

function Spinner({ className, ...restProps }: ComponentBaseProps) {
  return (
    <div className={resolveClassName(className, styles)} {...restProps}></div>
  );
}

export default Spinner;
