import { searchCitiesByName } from "../searchCitiesByName";

describe("Tests in searchCitiesByName", () => {
  test("should match snapshot", () => {
    const mockCities = [
      {
        country: "US",
        name: "city 1",
        lat: "1",
        lng: "2",
      },
      {
        country: "US",
        name: "city 2",
        lat: "1",
        lng: "2",
      },
      {
        country: "US",
        name: "city 3",
        lat: "1",
        lng: "2",
      },
    ];

    const result = searchCitiesByName(mockCities, "city 1");

    expect(result).toEqual([mockCities[0]]);
  });
});
