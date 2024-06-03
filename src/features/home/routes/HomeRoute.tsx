// Third party
import { useState } from "react";
// Context
import { useDataContext } from "@/providers/context/DataContext";
import { GenericObject } from "@/types";
// Components
import { CountryList } from "../components/country/list/CountryList";
import { HomeLayout } from "@/components/layouts/home/HomeLayout";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { SearchBar } from "@/components/ui/searchbar";

const options = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

export function HomeRoute() {
  const { data } = useDataContext();
  const [countries, setCountries] = useState<GenericObject[]>(data);
  const [selectedContinent, setSelectedContinent] = useState<GenericObject>();

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const filterValue = event.currentTarget.value.trim().toLowerCase();

    const filteredData = data.filter((country) =>
      country.name.toLowerCase().startsWith(filterValue)
    );

    setCountries(filteredData);
  };

  return (
    <HomeLayout>
      <div>
        <SearchBar
          onChange={handleSearch}
          placeholder="Search for a country..."
        ></SearchBar>
        <Dropdown options={options} onSelect={setSelectedContinent}></Dropdown>
      </div>
      <CountryList countries={countries}></CountryList>
    </HomeLayout>
  );
}
