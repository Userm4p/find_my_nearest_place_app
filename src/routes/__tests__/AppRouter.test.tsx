import { render, waitFor } from "@testing-library/react";
import AppRouter from "../AppRouter";

describe("Tests in AppRouter", () => {
  test("should match snapshot", async () => {
    const { container } = render(<AppRouter />);

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
