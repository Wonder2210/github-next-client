import * as React from 'react';
import { Select } from "@chakra-ui/core";

type OptionsProps = {
    value:string;
    content:string;
}

type SelectP = {
    options:Array<OptionsProps>;
    placeholder:string;
    onSelect: (e:any)=> void ;
    name:string;
}

const SearchSelect = ({options,placeholder,name,onSelect}:SelectP) => {
    return (

        <Select  placeholder={placeholder} name={name} size="sm" variant="flushed" onChange={onSelect}>
            {options.map((item,indx)=>{ 
                return(<option key={indx} value={item.value}>{item.content}</option>);
            })}
        </Select>
       
    )
};

export default SearchSelect;
