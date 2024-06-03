// Third party
import { useState } from "react";
// Custom hooks
import { useDisclosure } from "@/hooks/useDisclosure";
// Components
import { Button } from "../button";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps, GenericObject } from "@/types";
// Styles
import styles from "./Dropdown.module.css";
// Assets
import { chevronArrow } from "@/assets";

type Dropdown = ComponentBaseProps & {
  options: GenericObject[];
  onSelect?: React.Dispatch<React.SetStateAction<GenericObject>>;
};

export function Dropdown({
  className = "default",
  options,
  onSelect,
}: Dropdown) {
  const [selectedOption, setSelectedOption] = useState<GenericObject>();
  const { isOpen, close, toggle } = useDisclosure();

  const handleSelect = (option: GenericObject) => {
    setSelectedOption(option);
    close();

    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={resolveClassName(className, styles)}>
      <Button
        className={{
          module: ["dropdown", ...(isOpen ? ["open"] : [])],
        }}
        onClick={toggle}
      >
        {selectedOption ? selectedOption.label : "Filter by Region"}
        <img src={chevronArrow} alt="" />
      </Button>
      {isOpen && (
        <div className={styles["dropdown-list"]}>
          {options.map((option, index) => (
            <Button key={index} onClick={() => handleSelect(option)}>
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
