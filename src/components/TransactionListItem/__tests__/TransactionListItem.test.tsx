import {render, screen} from "@testing-library/react";
import TransactionListItem from "../TransactionListItem";
import {useRemoveTransactionMutation} from "../../../store/api/transactionApi";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const mockTransaction = {
    id: 1,
    beneficiary: "John Doe",
    address: "123 Main St",
    date: "2023-01-01 12:34:56",
    description: "Sample Transaction",
    amount: 50,
    account: "432432"
};
const renderComponent = () => {
    render(
        <table>
            <tbody>
            <TransactionListItem transaction={mockTransaction} />
            </tbody>
        </table>
    );
}

jest.mock("../../../store/api/transactionApi");

it('Should call delete transaction', async () => {
    const mockRemoveTransaction = jest.fn();
    (useRemoveTransactionMutation as jest.Mock).mockReturnValue([mockRemoveTransaction, {}]);

    renderComponent();
    const removeButton = screen.getByRole('button', {name: /remove/i});
    await act(async () => {
        userEvent.click(removeButton);
    });
    expect(mockRemoveTransaction).toBeCalledTimes(1);
});

it('Should render transaction list item', () => {
    const mockRemoveTransaction = jest.fn();
    (useRemoveTransactionMutation as jest.Mock).mockReturnValue([mockRemoveTransaction, {}]);
    renderComponent();
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(6);
});