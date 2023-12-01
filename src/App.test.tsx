import {renderWithProviders} from "./utils/test-utils";
import App from "./App";
import {screen} from "@testing-library/react";
import {server} from "./mocks/server";
import {rest} from "msw";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

const renderComponent = async () => {
    renderWithProviders(<App />);
}

describe('Fetching', () => {
    it('Should successfully fetch all transactions and display them on the screen', async () => {
        await renderComponent();
        const loadingState = screen.getByText(/loading data.../i);
        expect(loadingState).toBeInTheDocument();

        const links = await screen.findAllByTestId('row');

        expect(links).toHaveLength(2);
        expect(loadingState).not.toBeInTheDocument();
    });

    it('Should display error message when an error occured', async () => {
        server.use(
            rest.get(
                'http://localhost:3001/transactions',
                (req, res, ctx) => {
                    return res(ctx.status(500));
                }
            ),
        );

        await renderComponent();

        screen.getByText(/loading data.../i);
        const errorMessage = await screen.findByText('Failed to get data.');
        expect(errorMessage).toBeInTheDocument();
    });
});

it('Should filter the transactions', async () => {
    await renderComponent();
    const filterInput = screen.getByPlaceholderText('Search by beneficiary');

    await act(async () => {
        userEvent.type(filterInput, 'Carl');
    });
    const links = await screen.findAllByTestId('row');
    expect(links).toHaveLength(1);
});

