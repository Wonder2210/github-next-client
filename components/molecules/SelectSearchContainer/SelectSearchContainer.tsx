import * as React from 'react';
import {Stack } from '@chakra-ui/core';
import { SearchSelect} from '../../atoms/SearchSelect';

type sscontainer = {
    onSelect:(e:any)=> void;
}

const options = [
    {
        content:"base",
        value:"base"
    },
    {
        content:"base2",
        value:"base2"
    }
]

const SelectSearchContainer = ({onSelect}:sscontainer) => {
    return (
       <Stack isInline spacing={8} align="center">
        <SearchSelect options={options} onSelect={onSelect} name="issues" placeholder="issues"/>

        <SearchSelect options={options} onSelect={onSelect} name="second" placeholder="issues"/>

        <SearchSelect options={options} onSelect={onSelect} name="third" placeholder="issues"/>
       </Stack>
    )
}

export default SelectSearchContainer
