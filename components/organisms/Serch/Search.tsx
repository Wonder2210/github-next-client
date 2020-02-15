import * as React from 'react';
import { SearchBar } from '../../molecules/SearchBar';
import { SelectSearchContainer} from '../../molecules/SelectSearchContainer';
import {Box} from '@chakra-ui/core';

type SearchTypes = {
    input :(e:React.FormEvent<HTMLInputElement>)=> void;
    select:(e:any)=> void ;
    submit:(e:React.MouseEvent<HTMLButtonElement>)=> void;
    value:string;
}

const Search = ({input,select,submit,value}:SearchTypes) => {
    return (
        <Box>
            <SearchBar onChange={input} value={value} onClick={submit}/>
            <SelectSearchContainer onSelect={select}/>
        </Box>
    )
}

export default Search
