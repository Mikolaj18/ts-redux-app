import React from "react";
import { render, screen} from "@testing-library/react";
import Filter from "../Filter";
import userEvent from "@testing-library/user-event";
import exp from "constants";

const renderComponent = () => {
    const mockSetFilterEntry = jest.fn();
    render(<Filter setFilterEntry={mockSetFilterEntry} />);
    return {mockSetFilterEntry};
}

it('Should be initially empty', () => {
    renderComponent();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('');
});

it("Should change value of filter input", () => {
    const {mockSetFilterEntry} = renderComponent();
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, "Example entry")
    expect(mockSetFilterEntry).toHaveBeenCalledWith("Example entry");
});
