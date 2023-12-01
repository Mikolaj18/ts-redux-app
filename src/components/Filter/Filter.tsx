import FormInput from "../FormInput/FormInput";
import React from "react";

type TFilter = {
    setFilterEntry: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ setFilterEntry }: TFilter) => {
    return (
        <div>
            <FormInput name="Search" id="search" type="text" onChange={(e) => setFilterEntry(e.target.value)} placeholder="Search by beneficiary"/>
        </div>
    );
}

export default Filter;
