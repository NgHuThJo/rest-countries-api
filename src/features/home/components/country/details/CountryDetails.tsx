// Third party
import { Link, useLocation, useParams } from "react-router-dom";
// Context
import { useDataContext } from "@/providers/context/DataContext";
// Components
import { Image } from "@/components/ui/image";
// Utility
import { formatNumber } from "@/utils/intl";
// Styles
import styles from "./CountryDetails.module.css";
// Assets
import { backArrow } from "@/assets";

export function CountryDetails() {
  const { data } = useDataContext();
  const { country } = useParams();
  const location = useLocation();

  const countryData = data.find((item) => item.name.toLowerCase() === country);

  return (
    <section>
      <Link
        className={styles["link-back"]}
        to={location?.state?.from?.pathname ?? "/"}
      >
        <Image className="icon" src={backArrow}></Image>
        <p>Back</p>
      </Link>
      <div className={styles["details-container"]}>
        <Image src={countryData.flag} alt="flag" />
        <div className={styles.details}>
          <h1>{countryData.name}</h1>
          <div className={styles.info}>
            <div>
              <p>
                Native Name:&nbsp;
                <span>{countryData.nativeName}</span>
              </p>
              <p>
                Population:&nbsp;
                <span>{formatNumber(countryData.population)}</span>
              </p>
              <p>
                Region:&nbsp;
                <span>{countryData.region}</span>
              </p>
              <p>
                Sub Region:&nbsp;
                <span>{countryData.subregion}</span>
              </p>
              <p>
                Capital:&nbsp;
                <span>{countryData.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain:&nbsp;
                <span>{countryData.topLevelDomain}</span>
              </p>
              <p>
                Currencies:&nbsp;
                <span>
                  {countryData.currencies
                    .map((currency: []) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p>
                Languages:&nbsp;
                <span>
                  {countryData.languages
                    .map((language: []) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div>
            {countryData?.borders ? (
              <div className={styles["border-countries"]}>
                <p>Border countries:&nbsp;</p>
                {countryData?.borders
                  .map((alpha3Code) =>
                    data.find((country) => country.alpha3Code === alpha3Code)
                  )
                  .map((country) => (
                    <Link
                      to={`/${country.name.toLowerCase()}`}
                      className={styles.link}
                      key={country.numericCode}
                    >
                      {country.name}
                    </Link>
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
