import SearchBar from '.';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
    // Dummy function for testing.
    const searchFunc = jest.fn((_: string) => {});

    it('should render without crashing', () => {
        render(
            <SearchBar search={searchFunc}/>
        );
    });

    it('should contain specified placeholder text', () => {
        const placeholder = 'Test Placeholder';
        const { getByPlaceholderText } = render(
            <SearchBar placeholder={placeholder} search={searchFunc}/>
        );
        expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it('should contain default placeholder text', () => {
        const defaultPlaceholder = 'Search';
        const { getByPlaceholderText } = render(
            <SearchBar search={searchFunc} />
        );
        expect(getByPlaceholderText(defaultPlaceholder)).toBeInTheDocument();
    });

    it('should not contain reset button when search is empty', () => {
        const { queryByTestId } = render(
            <SearchBar search={searchFunc} />
        );

        const clearButton = queryByTestId('reset-button');
        expect(clearButton).toBeNull();
    });

    it('should contain reset button when search has text', () => {
        const { queryByTestId, queryByPlaceholderText } = render(
            <SearchBar search={searchFunc} />
        );
        
        const input = queryByPlaceholderText('Search') as HTMLInputElement;
        userEvent.type(input, 'Hello World!');

        const clearButton = queryByTestId('reset-button');
        expect(clearButton).toBeInTheDocument();
        expect(clearButton).toHaveAccessibleName('Reset');
    });

    it('should clear when reset button clicked', () => {
        const output = render(
            <SearchBar search={searchFunc} />
        );

        const input = output.queryByPlaceholderText('Search') as HTMLInputElement;
        userEvent.type(input, 'Hello World!');
        
        const clearButton = output.queryByTestId('reset-button') as HTMLElement;
        userEvent.click(clearButton);
        
        expect(input.value).toBeFalsy();
    });

    it('should contan search button', () => {
        const { queryByTestId } = render(
            <SearchBar search={searchFunc} />
        );
        
        const searchButton = queryByTestId('search-button');
        expect(searchButton).toBeInTheDocument();
        expect(searchButton).toHaveAccessibleName('Search');
    });

    it('should call search when search button clicked', () => {
        const output = render(
            <SearchBar search={searchFunc} />
        );

        const input = output.queryByPlaceholderText('Search') as HTMLInputElement;
        userEvent.type(input, 'Hello World!');

        const searchButton = output.queryByTestId('search-button') as HTMLElement;
        userEvent.click(searchButton);

        expect(searchFunc).toBeCalledWith('Hello World!');
    });
});