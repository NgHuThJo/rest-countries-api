// Third party
import { forwardRef } from "react";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./Dialog.module.css";

export const Dialog = forwardRef<HTMLDialogElement, ComponentBaseProps>(
  (props, ref) => (
    <dialog className={resolveClassName(props.className, styles)} ref={ref}>
      {props.children}
    </dialog>
  )
);
Dialog.displayName = "Dialog";
