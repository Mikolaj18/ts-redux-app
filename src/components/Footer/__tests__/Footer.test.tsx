import {render, screen} from "@testing-library/react";
import Footer from "../Footer";

const renderComponent = () => {
    render(<Footer/>);
}

it("Should render footer component", () => {
    renderComponent();
    const footer = screen.getByText(/example footer/i);
    expect(footer).toBeInTheDocument();
});