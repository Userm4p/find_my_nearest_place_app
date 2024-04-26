import { City } from "../types/cities";

export const searchCitiesByName = (cities: City[], name: string) => {
  return cities.filter((city) =>
    city.name.toLowerCase().includes(name.toLowerCase()),
  );
};
