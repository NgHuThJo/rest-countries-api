// Third party
import { useState } from "react";
// Context
import { useDataContext } from "@/providers/context/DataContext";
import { GenericObject } from "@/types";

export function HomeRoute() {
  const { data } = useDataContext();
  const [countries, setCountries] = useState<GenericObject[]>(data);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const filterValue = event.currentTarget.value.trim().toLowerCase();

    const filteredData = data.filter((country) =>
      country.name.toLowerCase().startsWith(filterValue)
    );

    setCountries(filteredData);
  };

  return (
    <>
      <form>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
        <select id="region" name="region" defaultValue="">
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}
