import { Link, useLocation } from "react-router-dom";
// Custom hooks
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// Components
import { Image } from "@/components/ui/image";
// Utility
import { formatNumber } from "@/utils/intl";
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps, GenericObject } from "@/types";
// Styles
import styles from "./CountryItem.module.css";

type Country = ComponentBaseProps & {
  country: GenericObject;
};

export function CountryItem({ className = "default", country }: Country) {
  const { ref, isInView } = useIntersectionObserver();
  const location = useLocation();

  return (
    <li className={resolveClassName(className, styles)} ref={ref}>
      {isInView ? (
        <>
          <Link
            to={`/${country.name.toLowerCase()}`}
            state={{ from: location }}
          >
            <Image className="flag" src={country.flag} alt="flag"></Image>
          </Link>
          <div>
            <Link
              to={`/${country.name.toLowerCase()}`}
              state={{ from: location }}
            >
              <h2>{country.name}</h2>
            </Link>
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
        </>
      ) : null}
    </li>
  );
}
