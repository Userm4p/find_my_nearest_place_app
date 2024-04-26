import { act, renderHook, waitFor } from "@testing-library/react";
import { useCities } from "../useCities";

jest.mock("../../../../db/cities.json", () =>
  Array.from({ length: 20 }, (_, i) => ({
    name: `City ${i}`,
    country: `Country ${i}`,
    lat: i,
    lng: i,
  })),
);

describe("Tests in useCities", () => {
  test("citiesToTable should return 10 cities", async () => {
    const { result } = renderHook(() => useCities());
    await waitFor(() => expect(result.current.citiesToTable).toHaveLength(10));
  });

  test("handlePrevPage should be called if pageNumber is greater than 0", async () => {
    const { result } = renderHook(() => useCities());

    act(() => {
      result.current.handlePrevPage();
    });

    await waitFor(() => expect(result.current.page).toBe(0));

    act(() => {
      result.current.handleNextPage();
    });

    await waitFor(() => expect(result.current.page).toBe(1));

    act(() => {
      result.current.handlePrevPage();
    });

    await waitFor(() => expect(result.current.page).toBe(0));
  });

  test("handleNextPage should be called if pageNumber is less than pagesNumber", async () => {
    const { result } = renderHook(() => useCities());

    act(() => {
      result.current.handleNextPage();
    });

    await waitFor(() => expect(result.current.page).toBe(1));

    act(() => {
      result.current.handleNextPage();
    });

    await waitFor(() => expect(result.current.page).toBe(1));
  });

  test("when city is empty, cities should be equal to dbCities", async () => {
    const { result } = renderHook(() => useCities());

    await waitFor(() => expect(result.current.cities).toHaveLength(20));
  });

  test("when city is not empty, cities should be filtered", async () => {
    const { result } = renderHook(() => useCities());

    act(() => {
      result.current.handleChange({
        target: { value: "city 11", name: "city" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    await waitFor(() => expect(result.current.cities).toHaveLength(1));
  });
});
