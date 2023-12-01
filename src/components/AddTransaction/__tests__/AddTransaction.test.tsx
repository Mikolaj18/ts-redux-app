import {render, screen, act} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTransaction from "../AddTransaction";
import {useAddTransactionMutation} from "../../../store/api/transactionApi";
import moment from "moment";

jest.mock("../../../store/api/transactionApi");

const renderComponent = () => {
    render(<AddTransaction/>);
}

it("Should succesfully be called", async () => {
    const mockAddTransaction = jest.fn();
    (useAddTransactionMutation as jest.Mock).mockReturnValue([mockAddTransaction, {}]);

    jest.spyOn(moment.prototype, "format").mockReturnValue("2023-01-12 19:12:15");

    renderComponent();

    userEvent.type(screen.getByRole("textbox", {name: /description/i}), "example desc");
    userEvent.type(screen.getByRole("textbox", {name: /address/i}), "example address");
    userEvent.type(screen.getByRole("spinbutton", {name: /account/i}), "12345");
    userEvent.type(screen.getByRole("textbox", {name: /beneficiary/i}), "example beneficiary");
    userEvent.type(screen.getByRole("spinbutton", {name: /amount/i}), "50");

    await act(async () => {
        userEvent.click(screen.getByRole("button", {name: /add/i}));
    });

    expect(mockAddTransaction).toHaveBeenCalledTimes(1);
    expect(mockAddTransaction).toHaveBeenCalledWith({
        description: "example desc",
        address: "example address",
        account: "12345",
        beneficiary: "example beneficiary",
        amount: 50,
        date: "2023-01-12 19:12:15",
    });
});

it("Should not be called when error occured", async () => {
    const mockAddTransaction = jest.fn();
    (useAddTransactionMutation as jest.Mock).mockReturnValue([mockAddTransaction, {}]);

    renderComponent();
    await act(async () => {
        userEvent.click(screen.getByRole("button", {name: /add/i}));
    });

    expect(mockAddTransaction).toBeCalledTimes(0);
});