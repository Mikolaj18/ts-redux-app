import {render, screen} from "@testing-library/react";
import Navbar from "../Navbar";

const renderComponent = () => {
    render(<Navbar/>);
}

it("Should render Navbar component", () => {
    renderComponent();
    const header = screen.getByText(/example navbar/i);
    expect(header).toBeInTheDocument();
});