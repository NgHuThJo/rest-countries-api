// Third party
import { Link } from "react-router-dom";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./ErrorRoute.module.css";

export function ErrorRoute({
  className = "default",
  ...restProps
}: ComponentBaseProps) {
  return (
    <div className={resolveClassName(className, styles)} {...restProps}>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/" replace>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}
