import { useCallback, useMemo, useState } from "react";
import dbCities from "../../../db/cities.json";
import { City } from "../types/cities";
import { useForm } from "../../../hooks/useForm";
import { searchCitiesByName } from "../utils/searchCitiesByName";
import { calculateDistanceBetweenTwoPoints } from "../utils/calculateDistanceBetweenTwoPoints";

export const useCities = () => {
  const { handleChange, reset, values } = useForm({
    initialValues: {
      city: "",
    },
  });

  const [page, setPage] = useState(0);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const rowsPerPage = useMemo(() => 10, []);

  const cities: City[] = useMemo((): City[] => {
    if (values.city === "") return dbCities;

    const filteredCitiesByName = searchCitiesByName(dbCities, values.city);

    return filteredCitiesByName;
  }, [values.city]);

  const citiesToTable = useMemo(() => {
    return cities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [cities, page, rowsPerPage]);

  const pagesNumber = useMemo(() => {
    return Math.ceil(cities.length / rowsPerPage);
  }, [cities, rowsPerPage]);

  const nearestCities: City[] = useMemo((): City[] => {
    if (!selectedCity) return [];

    const citiesWithDistance = dbCities.map((city) => {
      const distance = calculateDistanceBetweenTwoPoints(
        Number(selectedCity.lat),
        Number(selectedCity.lng),
        Number(city.lat),
        Number(city.lng),
      );

      return { ...city, distance };
    });

    const sortedCities = citiesWithDistance.sort(
      (a, b) => a.distance - b.distance,
    );

    const numberOfCitiesToReturn = 4;

    return sortedCities.slice(1, numberOfCitiesToReturn + 1);
  }, [selectedCity]);

  const handleNextPage = useCallback(() => {
    if (page + 1 < pagesNumber) setPage((prev) => prev + 1);
  }, [page, pagesNumber]);

  const handlePrevPage = useCallback(() => {
    if (page > 0) setPage((prev) => prev - 1);
  }, [page]);

  const handleSelectCity = useCallback((city: City) => {
    setSelectedCity(city);
  }, []);

  const clearSelectedCity = useCallback(() => {
    setSelectedCity(null);
  }, []);

  return {
    cities,
    values,
    handleChange,
    reset,
    citiesToTable,
    handleNextPage,
    handlePrevPage,
    pagesNumber,
    page,
    handleSelectCity,
    nearestCities,
    selectedCity,
    clearSelectedCity,
  };
};
