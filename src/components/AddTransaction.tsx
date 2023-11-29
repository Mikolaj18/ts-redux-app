import FormInput from "./FormInput";
import {FormEvent, RefObject, useRef, useState} from "react";
import {isMoreThanZero, isPositiveInteger, notEmpty} from "../validators/validators";
import {useAddTransactionMutation} from "../store/api/transactionApi";
import moment from "moment";
import {toast} from "react-toastify";

const AddTransaction = () => {
    const descriptionRef = useRef<HTMLInputElement>(document.createElement('input'));
    const addressRef = useRef<HTMLInputElement>(document.createElement('input'));
    const accountRef = useRef<HTMLInputElement>(document.createElement('input'));
    const beneficiaryRef = useRef<HTMLInputElement>(document.createElement('input'));
    const amountRef = useRef<HTMLInputElement>(document.createElement('input'));

    const [addTransaction, result] = useAddTransactionMutation();
    const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
    const [validated, setValidated] = useState<boolean>(false);

    const currentDate = moment();
    const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');

    const validateField = (refInput: RefObject<HTMLInputElement>, validator: Function, message: string) => {
        if (!refInput.current) return false;

        const { value = "", name = "" } = refInput.current;
        const validation = validator(value);

        setFormErrors(prevState => {
            const currentErrors = prevState[name] ?? [];

            if (validation) {
                currentErrors.splice(currentErrors.indexOf(message), 1);
            } else if (!currentErrors.includes(message)) {
                currentErrors.push(message);
            }
            return {
                ...prevState,
                [name]: currentErrors.filter(el => el !== null),
            };
        });

        return validation;
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation = [
            validateField(descriptionRef, notEmpty, "Cannot be empty"),
            validateField(addressRef, notEmpty, "Cannot be empty"),
            validateField(accountRef, notEmpty, "Cannot be empty"),
            validateField(accountRef, isPositiveInteger, "Should be positive integer"),
            validateField(beneficiaryRef, notEmpty, "Cannot be empty"),
            validateField(amountRef, notEmpty, "Cannot be empty"),
            validateField(amountRef, isMoreThanZero, "Should be a number bigger than 0"),
        ];

        const isFormValid = !validation.includes(false);
        setValidated(isFormValid);

        try {
            if (isFormValid) {
                await addTransaction({
                    address: addressRef.current.value,
                    amount: parseInt(amountRef.current.value),
                    beneficiary: beneficiaryRef.current.value,
                    account: accountRef.current.value,
                    date: formattedDate,
                    description: descriptionRef.current.value,
                }).unwrap();
                toast.success("Transaction added successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                });

                descriptionRef.current.value  = "";
                addressRef.current.value  = "";
                accountRef.current.value  = "";
                beneficiaryRef.current.value  = "";
                amountRef.current.value  = "";
            } else {
                toast.error("Fix form error(s)", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            // @ts-ignore
            toast.error(`An unexpected error has occurred (code ${error.status})`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    return (
        <form noValidate onSubmit={handleFormSubmit}>
            <FormInput name="Description" id="description" type="text" placeholder="Irure ut cillum mollit proident voluptate veniam." ref={descriptionRef} errors={formErrors['Description']}/>
            <FormInput name="Address" id="address" type="text" placeholder="715 Bennet Court, Brogan, Arizona, 9202" ref={addressRef} errors={formErrors['Address']}/>
            <FormInput name="Account" id="account" type="number" placeholder="10110104415359647878000000000" min={1} ref={accountRef} errors={formErrors['Account']}/>
            <FormInput name="Beneficiary" id="beneficiary" type="text" placeholder="Amie Whitley" ref={beneficiaryRef} errors={formErrors['Beneficiary']}/>
            <FormInput name="Amount" id="amount" type="number" placeholder="655.51" min={1} ref={amountRef} errors={formErrors['Amount']}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded">Add</button>
        </form>
    )
}

export default AddTransaction;