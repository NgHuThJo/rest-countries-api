// Third party
import { useState } from "react";
// Custom hooks
import { useDisclosure } from "@/hooks/useDisclosure";
// Components
import { Button } from "../button";
// Utility
import { resolveClassName } from "@/utils/className";
// Types
import { ComponentBaseProps } from "@/types";
import { Option } from "@/features/home/types";
// Styles
import styles from "./Dropdown.module.css";
// Assets
import { chevronArrow } from "@/assets";

type Dropdown = ComponentBaseProps & {
  options: Option[];
  onSelect?: (option: Option) => void;
};

export function Dropdown({
  className = "default",
  options,
  onSelect,
}: Dropdown) {
  const [selectedOption, setSelectedOption] = useState<Option>();
  const { isOpen, close, toggle } = useDisclosure();

  const handleSelect = (option: Option) => {
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
        <div>
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
