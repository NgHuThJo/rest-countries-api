// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Sidebar.module.css";

function Sidebar({ children, className }: ComponentBaseProps) {
  return (
    <aside className={resolveClassName(className, styles)}>{children}</aside>
  );
}

export default Sidebar;
