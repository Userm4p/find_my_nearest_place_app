import { useCallback, useMemo, useState } from "react";
import dbCities from "../../../db/cities.json";
import { City } from "../types/cities";
import { useForm } from "../../../hooks/useForm";
import { searchCitiesByName } from "../utils/searchCitiesByName";

export const useCities = () => {
  const { handleChange, reset, values } = useForm({
    initialValues: {
      city: "",
    },
  });

  const [page, setPage] = useState(0);
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

  const handleNextPage = useCallback(() => {
    if (page + 1 < pagesNumber) setPage((prev) => prev + 1);
  }, [page, pagesNumber]);

  const handlePrevPage = useCallback(() => {
    if (page > 0) setPage((prev) => prev - 1);
  }, [page]);

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
  };
};
