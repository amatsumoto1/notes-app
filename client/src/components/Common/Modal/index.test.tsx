import Modal from '.';
import { render } from '@testing-library/react';

describe('Modal', () => {
    it('should render without crashing', () => {
        render(
            <Modal visible={true} />
        )
    });

    it('should render nothing when hidden', () => {
        const { container } = render(
            <Modal visible={false} />
        );

        expect(container.firstChild).toBeNull();
    });
});