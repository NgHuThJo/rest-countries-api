import { hasWhiteSpaces } from "./string";
import { GenericObject } from "@/types";

type ModuleStyles = {
  module: string[];
  global?: string[];
};

type GlobalStyles = {
  module?: string[];
  global: string[];
};

export type CombinedStyles = ModuleStyles | GlobalStyles;

export function resolveClassName(
  classes: CombinedStyles | string | undefined,
  styles: GenericObject<string>
) {
  try {
    if (!classes) {
      return;
    }

    if (typeof classes === "string") {
      return styles[classes] || classes;
    }

    const moduleStyles =
      classes?.module &&
      Array.from(new Set(classes.module))
        .filter((className) => {
          if (hasWhiteSpaces(className)) {
            throw new Error(
              `CSS module class "${className}" contains whitespace character`
            );
          }

          if (!styles[className]) {
            throw new ReferenceError(
              `CSS module class "${className}" is not defined`
            );
          }

          return true;
        })
        .map((className) => styles[className]);

    const globalStyles =
      classes?.global &&
      Array.from(new Set(classes.global)).filter((className) => {
        if (hasWhiteSpaces(className)) {
          throw new Error(
            `global class "${className}" contains whitespace character`
          );
        }

        return true;
      });

    return [...(moduleStyles || []), ...(globalStyles || [])].join(" ");
  } catch (error) {
    console.log((error as Error).message);
  }
}
