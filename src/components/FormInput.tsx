import React, { forwardRef, ForwardedRef } from "react";

type TFormInput = {
    name: string,
    id: string,
    type: string,
    placeholder?: string,
    errors?: string[],
    min?: number,
    max?: number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInput = forwardRef(({name, id, type, placeholder, errors, min, max, onChange}: TFormInput, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>{name}</label>
            <input
                ref={ref}
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                min={min}
                max={max}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors &&
                <ul>
                    {errors.map((error, idx) => (
                        <li className="text-red-500 text-xs" key={idx}>{error}</li>
                    ))}
                </ul>
            }
        </div>
    );
});

export default FormInput;
