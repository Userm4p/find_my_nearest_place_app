import { render } from "@testing-library/react";
import { NearestCities } from "../NearestCities";
import { CitiesContext } from "../../context/CitiesContext";
import "@testing-library/jest-dom";

const mockContext = {
  citiesToTable: Array.from({ length: 20 }, (_, i) => ({
    name: `City ${i}`,
    country: `Country ${i}`,
    lat: `${i}`,
    lng: `${i}`,
  })),
  pagesNumber: 20,
  page: 1,
  handleNextPage: () => {},
  handlePrevPage: () => {},
  values: { city: "" },
  handleChange: () => {},
  reset: () => {},
  cities: [],
  handleSelectCity: () => {},
  nearestCities: [],
  selectedCity: null,
  clearSelectedCity: () => {},
};

const mockNearestCities = Array.from({ length: 5 }, (_, i) => ({
  name: `City ${i}`,
  country: `Country ${i}`,
  lat: "i",
  lng: "i",
  distance: "i",
}));

describe("Tests in NearestCities", () => {
  test("should match snapshot when nearestCities is empty", () => {
    const { container, getByTestId } = render(
      <CitiesContext.Provider value={mockContext}>
        <NearestCities />
      </CitiesContext.Provider>,
    );
    expect(getByTestId("empty_message")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot when nearestCities is not empty", () => {
    const { container, getByTestId } = render(
      <CitiesContext.Provider
        value={{
          ...mockContext,
          nearestCities: mockNearestCities,
          selectedCity: mockNearestCities[0],
        }}
      >
        <NearestCities />
      </CitiesContext.Provider>,
    );
    expect(getByTestId("nearest_citites")).toBeInTheDocument();
    expect(getByTestId("clear_button")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
