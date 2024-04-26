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
});
