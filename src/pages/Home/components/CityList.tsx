import { useContext, useMemo } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { CityItem, PageButton } from "./styled";
import { Span } from "../../../components/Span/styled";

export const CityList = () => {
  const { citiesToTable, pagesNumber, page, handleNextPage, handlePrevPage } =
    useContext(CitiesContext);

  const isPrevButtonDisabled = useMemo(() => page === 0, [page]);
  const isNextButtonDisabled = useMemo(
    () => page + 1 === pagesNumber,
    [page, pagesNumber],
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
          <PageButton data-testid="prev_button" onClick={handlePrevPage} disabled={isPrevButtonDisabled}>
            Prev
          </PageButton>
          <PageButton data-testid="next_button" onClick={handleNextPage} disabled={isNextButtonDisabled}>
            Next
          </PageButton>
        </div>
      </div>
      <div className="Home__CityList_cities_container">
        {citiesToTable.map((city, i) => (
          <CityItem key={i}>{city.name}</CityItem>
        ))}
      </div>
    </div>
  );
};
