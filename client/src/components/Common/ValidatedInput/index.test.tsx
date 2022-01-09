import ValidatedInput from '.';
import { render } from '@testing-library/react';

describe('ValidatedInput', () => {
    it('should render without crashing', () => {
        render(<ValidatedInput name='test' />);
    });

    it('should display errors correctly', () => {
        const errorText = 'Test Error';
        const { getByText } = render(
            <ValidatedInput name='test' error={errorText} />
        );

        expect(getByText(errorText)).toBeInTheDocument();
    });
});