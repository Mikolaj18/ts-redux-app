import React from "react";
import {render, screen} from "@testing-library/react";
import Balance from "../Balance";

it('Should render correct value', () => {
    const testData = { totalBalance: 30 };
    render(<Balance {...testData} />);
    const balanceElement = screen.getByText(/Balance:/);

    expect(balanceElement).toBeInTheDocument();
    expect(screen.getByText('30.00$')).toBeInTheDocument();
});


