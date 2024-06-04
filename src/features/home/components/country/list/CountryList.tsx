// Components
import { CountryItem } from "../item/CountryItem";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps, GenericObject } from "@/types";
// Styles
import styles from "./CountryList.module.css";

type CountryList = ComponentBaseProps & {
  countries: GenericObject[];
};

export function CountryList({ className = "default", countries }: CountryList) {
  return (
    <ul className={resolveClassName(className, styles)}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.numericCode}></CountryItem>
      ))}
    </ul>
  );
}
