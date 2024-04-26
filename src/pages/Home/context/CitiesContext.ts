import { createContext } from "react";
import { City } from "../types/cities";

export interface ICitiesContext {
  cities: City[];
  values: {
    city: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  citiesToTable: City[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
  pagesNumber: number;
  page: number;
  handleSelectCity: (city: City) => void;
  nearestCities: City[];
  selectedCity: City | null;
  clearSelectedCity: () => void;
}

export const CitiesContext = createContext<ICitiesContext>({
  cities: [],
  values: {
    city: "",
  },
  handleChange: () => {},
  reset: () => {},
  citiesToTable: [],
  handleNextPage: () => {},
  handlePrevPage: () => {},
  pagesNumber: 0,
  page: 0,
  handleSelectCity: () => {},
  nearestCities: [],
  selectedCity: null,
  clearSelectedCity: () => {},
});
