import FormInput from "./FormInput";
import {useRef} from "react";

const Filter = () => {
    const searchRef = useRef<HTMLInputElement>(document.createElement('input'));
    return (
      <div>
          <FormInput name="Search" id="search" type="text" ref={searchRef} placeholder="Search by beneficiary"/>
      </div>
    );
}

export default Filter;