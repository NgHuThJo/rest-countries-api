// Third party
import { useState } from "react";
// Context
import { useDataContext } from "@/providers/context/DataContext";
import { GenericObject } from "@/types";
// Custom hooks
import { useDebounce } from "@/hooks/useDebounce";
// Components
import { CountryList } from "../components/country/list/CountryList";
import { HomeLayout } from "@/components/layouts/home/HomeLayout";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { SearchBar } from "@/components/ui/searchbar";
// Types
import { Option } from "../types";

const options: Option[] = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

function filterData(
  data: GenericObject[],
  searchQuery: string,
  selectedContinent: Option | undefined
) {
  return data.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesContinent = selectedContinent
      ? country.region.toLowerCase() === selectedContinent.value
      : true;

    return matchesSearch && matchesContinent;
  });
}

export function HomeRoute() {
  const { data } = useDataContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState<Option>();
  const [filteredData, setFilteredData] = useState<GenericObject[]>(data);

  const debouncedFilteredData = useDebounce(() => {
    setFilteredData(filterData(data, searchQuery, selectedContinent));
  });

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value.trim());

    debouncedFilteredData();
  };

  const handleSelect = (option: Option) => {
    setSelectedContinent(option);

    debouncedFilteredData();
  };

  return (
    <HomeLayout>
      <div>
        <SearchBar
          onChange={handleSearch}
          placeholder="Search for a country..."
        ></SearchBar>
        <Dropdown options={options} onSelect={handleSelect}></Dropdown>
      </div>
      <CountryList countries={filteredData}></CountryList>
    </HomeLayout>
  );
}
