import * as React from 'react';
import {SearchButton} from '../../atoms/Button';
import { SearchInput } from "../../atoms/SearchInput";
import { InputGroup,InputRightElement } from '@chakra-ui/core';

type search ={
    onChange:(e:React.FormEvent<HTMLInputElement>)=> void;
    value: string;
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void;

}

const SearchBar = ({onChange,value,onClick}:search) => {
    return (
       <InputGroup>
       <SearchInput 
       placeholder="type a technology name" 
       onChange={onChange} value={value}/>
        <InputRightElement >
            <SearchButton onClick={onClick}/>
        </InputRightElement>
       </InputGroup>
    )
}

export default SearchBar;

