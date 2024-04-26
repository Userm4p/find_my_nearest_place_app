import { calculateDistanceBetweenTwoPoints } from "../calculateDistanceBetweenTwoPoints";

describe("Tests in calculateDistanceBetweenTwoPoints", () => {
  test("should return the distance between two points", () => {
    const result = calculateDistanceBetweenTwoPoints(0, 0, 0, 1);
    expect(result).toBeCloseTo(111.19);
  });
});
