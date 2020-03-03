import * as React from 'react';
import { Input } from "@chakra-ui/core";

type InputProps ={
    placeholder:string;
    onChange:(e:React.FormEvent<HTMLInputElement>)=> void;
    value:string;
}

const SearchInput = ({placeholder,onChange,value}:InputProps)=>{
    return (
      
            <Input placeholder={placeholder} 
            onChange={onChange} 
            value={value}
            name="input"
            />
           
    );
};

export default SearchInput;