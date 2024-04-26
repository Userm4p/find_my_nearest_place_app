import { render } from "@testing-library/react";
import { CityList } from "../CityList";
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

describe("Tests in CityList", () => {
  test("should match snapshot", () => {
    const { container } = render(
      <CitiesContext.Provider value={mockContext}>
        <CityList />
      </CitiesContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test("prev button should be disabled", () => {
    const { getByTestId } = render(
      <CitiesContext.Provider value={{ ...mockContext, page: 0 }}>
        <CityList />
      </CitiesContext.Provider>,
    );
    expect(getByTestId("prev_button")).toBeDisabled();
  });

  test("next button should be disabled", () => {
    const { getByTestId } = render(
      <CitiesContext.Provider value={{ ...mockContext, page: 19 }}>
        <CityList />
      </CitiesContext.Provider>,
    );
    expect(getByTestId("next_button")).toBeDisabled();
  });

  test("on click city should call handleSelectCity", () => {
    const handleSelectCity = jest.fn();
    const { getByText } = render(
      <CitiesContext.Provider value={{ ...mockContext, handleSelectCity }}>
        <CityList />
      </CitiesContext.Provider>,
    );
    getByText("City 0").click();
    expect(handleSelectCity).toHaveBeenCalledWith(mockContext.citiesToTable[0]);
  });

  test("should show empty message", () => {
    const { getByTestId } = render(
      <CitiesContext.Provider value={{ ...mockContext, citiesToTable: [] }}>
        <CityList />
      </CitiesContext.Provider>,
    );
    expect(getByTestId("empty_cities_list")).toBeInTheDocument();
  });
});
