import {screen} from "@testing-library/react";
import TransactionsTable from "../TransactionsTable";
import {renderWithProviders} from "../../../utils/test-utils";
import exp from "constants";

const mockTransactions = [
    {
        id: 1,
        beneficiary: "John Doe",
        address: "123 Main St",
        date: "2023-01-01 12:34:55",
        description: "Sample Transaction",
        amount: 20,
        account: "432432"
    },
    {
        id: 2,
        beneficiary: "John Doe2",
        address: "123 Mai",
        date: "2023-01-01 12:34:56",
        description: "Sample Transaction2",
        amount: 10,
        account: "432432"
    },
    {
        id: 3,
        beneficiary: "John Doe3",
        address: "123",
        date: "2023-01-01 12:34:57",
        description: "Sample Transaction2",
        amount: 30,
        account: "432432"
    },
];
const renderComponent = () => {
    renderWithProviders(<TransactionsTable data={mockTransactions} isLoading={false} error={null}/>);
}

it("Should display transactions table", () => {
   renderComponent();
   const headers = screen.getAllByRole('columnheader');
   const rows = screen.getAllByTestId('row');
   expect(headers).toHaveLength(6);
   expect(rows).toHaveLength(3);
});

it('Should display pagination', () => {
    renderComponent();
    const nextButton = screen.getByLabelText('Next page');
    const prevButton = screen.getByLabelText('Previous page');
    const currentPage = screen.getByLabelText('Page 1 is your current page');
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(currentPage).toBeInTheDocument();
});