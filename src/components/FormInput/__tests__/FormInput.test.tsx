import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

it("Should render single input", () => {
    const inputProps = {
        name: 'input',
        type: 'text',
        id: 'input',
        placeholder: 'placeholder',
        errors: undefined,
    };

    render(<FormInput {...inputProps} />);
    expect(screen.getByRole('textbox', {name: /input/}));
});

it('Should render FormInput component with error messages', () => {
    const inputProps = {
        name: 'input',
        type: 'text',
        id: 'input',
        placeholder: 'placeholder',
        errors: ['Error message 1', 'Error message 2'],
    };

    render(<FormInput {...inputProps} />);
    expect(screen.getByText('Error message 1')).toBeInTheDocument();
    expect(screen.getByText('Error message 2')).toBeInTheDocument();
});

