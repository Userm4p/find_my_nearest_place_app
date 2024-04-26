import { useContext, useMemo } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { H2 } from "../../../components/H2/styled";
import { NearestCitiesEmpty, NearestCityItem, PageButton } from "./styled";
import { Colors } from "../../../utils/enums/Colors";

export const NearestCities = () => {
  const { nearestCities, selectedCity, clearSelectedCity } =
    useContext(CitiesContext);

  const isArrayEmpty = useMemo(
    () => nearestCities.length === 0,
    [nearestCities],
  );

  return (
    <div className="Home__NearestCities_container">
      <div className="Home__NearestCities_header">
        <H2 style={{
          color: Colors.Black
        }}>
          Selected city:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {selectedCity?.name || "None"}
          </span>
        </H2>
        {selectedCity && (
          <PageButton data-testid="clear_button" onClick={clearSelectedCity}>
            Clear
          </PageButton>
        )}
      </div>
      {!isArrayEmpty ? (
        <div
          className="Home__NearestCities_cities_container"
          data-testid="nearest_citites"
        >
          {nearestCities.map((city, i) => (
            <NearestCityItem key={i}>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                {i + 1}.
              </span>
              {city.name}
            </NearestCityItem>
          ))}
        </div>
      ) : (
        <NearestCitiesEmpty data-testid="empty_message">
          <span>You must select a city to find the nearest cities. 😉</span>
        </NearestCitiesEmpty>
      )}
    </div>
  );
};
