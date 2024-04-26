import { render } from '@testing-library/react';
import Home from '../Home';

jest.mock("../hooks/useCities", () => ({
    useCities: () => ({
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
    }),
}));

describe('Tests in Home', () => {
    test('should match snapshot',() => {
            const { container } = render(<Home />);
            expect(container).toMatchSnapshot();
    });
});