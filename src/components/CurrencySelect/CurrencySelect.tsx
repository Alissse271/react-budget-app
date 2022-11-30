import { useCurrencyContext } from "context/CurrencyContext";
import Select, { SingleValue } from "react-select";
import { styles } from "./styles";

export const CurrencySelect = () => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<typeof curentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      isSearchable={false}
      value={curentCurrency}
      onChange={handleSelect}
      styles={styles}
      isMulti={false}
    />
  );
};
