import { useContext, useMemo } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { CitiesToTableEmpty, CityItem, PageButton } from "./styled";
import { Span } from "../../../components/Span/styled";

export const CityList = () => {
  const {
    citiesToTable,
    pagesNumber,
    page,
    handleNextPage,
    handlePrevPage,
    handleSelectCity,
  } = useContext(CitiesContext);

  const isPrevButtonDisabled = useMemo(() => page === 0, [page]);
  const isNextButtonDisabled = useMemo(
    () => page + 1 === pagesNumber,
    [page, pagesNumber],
  );

  const citiesToTableIsEmpty = useMemo(
    () => citiesToTable.length === 0,
    [citiesToTable],
  );

  return (
    <div className="Home__CityList_container">
      <div className="Home__CityList_header">
        <div className="Home__CityList_header_pages_container">
          <Span>Page</Span>
          <Span>{page + 1}</Span>
          <Span>of</Span>
          <Span>{pagesNumber}</Span>
        </div>
        <div className="Home__CityList_header_buttons_container">
          <PageButton
            data-testid="prev_button"
            onClick={handlePrevPage}
            disabled={isPrevButtonDisabled}
          >
            Prev
          </PageButton>
          <PageButton
            data-testid="next_button"
            onClick={handleNextPage}
            disabled={isNextButtonDisabled}
          >
            Next
          </PageButton>
        </div>
      </div>
      <div className="Home__CityList_cities_container">
        {citiesToTable.map((city, i) => (
          <CityItem onClick={() => handleSelectCity(city)} key={i}>
            {city.name}
          </CityItem>
        ))}
        {citiesToTableIsEmpty && (
          <CitiesToTableEmpty data-testid="empty_cities_list">
            We couldn't find any city with the name you provided. 😢
          </CitiesToTableEmpty>
        )}
      </div>
    </div>
  );
};
