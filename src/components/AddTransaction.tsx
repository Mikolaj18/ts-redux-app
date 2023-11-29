import FormInput from "./FormInput";
import {FormEvent, useRef} from "react";

const AddTransaction = () => {
    const descriptionRef = useRef<HTMLInputElement>(document.createElement('input'));
    const addressRef = useRef<HTMLInputElement>(document.createElement('input'));
    const accountRef = useRef<HTMLInputElement>(document.createElement('input'));
    const beneficiaryRef = useRef<HTMLInputElement>(document.createElement('input'));
    const amountRef = useRef<HTMLInputElement>(document.createElement('input'));

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(descriptionRef.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <FormInput name="Description" id="description" type="text" ref={descriptionRef}/>
            <FormInput name="Address" id="address" type="text" ref={addressRef}/>
            <FormInput name="Account" id="account" type="number" min={1} ref={accountRef}/>
            <FormInput name="Beneficiary" id="beneficiary" type="text" ref={beneficiaryRef}/>
            <FormInput name="Amount" id="amount" type="number" min={1} ref={amountRef}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
    )
}

export default AddTransaction;