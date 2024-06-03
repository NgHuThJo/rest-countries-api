// Components
import { Image } from "../image";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
// Styles
import styles from "./SearchBar.module.css";
// Assets
import { magnifyingGlass } from "@/assets";

type SearchBar = ComponentBaseProps & {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({
  className = "default",
  onChange,
  placeholder,
}: SearchBar) {
  return (
    <div className={resolveClassName(className, styles)}>
      <Image className="icon" src={magnifyingGlass}></Image>
      <input
        type="search"
        id="search"
        name="search"
        size={40}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
