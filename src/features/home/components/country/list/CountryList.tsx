// Components
import { CountryItem } from "../item/CountryItem";
import { Image } from "@/components/ui/image";
// Utility
import { resolveClassName } from "@/utils/className";
import { formatNumber } from "@/utils/intl";
// Types
import { ComponentBaseProps, GenericObject } from "@/types";
// Styles
import styles from "./CountryList.module.css";

type CountryList = ComponentBaseProps & {
  countries: GenericObject;
};

export function CountryList({ className = "default", countries }: CountryList) {
  return (
    <ul className={resolveClassName(className, styles)}>
      {countries.map((country) => (
        <CountryItem key={country.numericCode}>
          <Image className="flag" src={country.flag}></Image>
          <div>
            <h2>{country.name}</h2>
            <p>
              Population: <span>{formatNumber(country.population)}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </CountryItem>
      ))}
    </ul>
  );
}
