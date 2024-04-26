import { useContext } from "react";
import { H1 } from "../../../components/H1/styled";
import { Input } from "../../../components/Input/styled";
import { CitiesContext } from "../context/CitiesContext";

export const Header = () => {
  const { handleChange, values } = useContext(CitiesContext);

  return (
    <>
      <H1>Find My Nearest Place App 🌍</H1>
      <Input
        placeholder="Type a city"
        onChange={handleChange}
        value={values.city}
        name="city"
      />
    </>
  );
};
