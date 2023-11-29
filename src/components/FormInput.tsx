import React, { forwardRef, ForwardedRef } from "react";

type TFormInput = {
    name: string,
    id: string,
    type: string,
    error?: string,
    min?: number,
    max?: number,
}

const FormInput = forwardRef(({name, id, type, error, min, max}: TFormInput, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>{name}</label>
            <input
                ref={ref}
                name={name}
                id={id}
                type={type}
                min={min}
                max={max}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
});

export default FormInput;
