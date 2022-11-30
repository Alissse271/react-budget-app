import { ICurrency } from "context/CurrencyContext/types";
import { StylesConfig } from "react-select";

export const styles: StylesConfig<ICurrency> = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "75px",
    height: "30px",
    borderRadius: "5px",
    borderColor: "#eee",
    boxShadow: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    textAlign: "center",
    lineHeight: 1.25,
    color: "#000",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    width: "75px",
    borderRadius: "5px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    borderRadius: "5px",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: "12px",
    lineHeight: 1.25,
    color: "#000",
    backgroundColor: state.isFocused ? "#eee" : "white",
  }),
};
