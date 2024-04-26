import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Tests in Header', () => {
    test('should match snapshot',() => {
            const { container } = render(<Header />);
            expect(container).toMatchSnapshot();
    });
});