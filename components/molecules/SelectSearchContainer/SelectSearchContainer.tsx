import * as React from 'react';
import {Stack,Box } from '@chakra-ui/core';
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
];

type Cbox = {
    children : React.ReactNode;
}

const CustomBox = ({children}: Cbox  )=>(
<Box p={2}>
    {children}
</Box>);

const SelectSearchContainer = ({onSelect}:sscontainer) => {
    return (
       <Stack isInline spacing={8} display="flex" alignItems="center" justifyContent="center" align="center">
        <CustomBox>
        <SearchSelect  options={options} onSelect={onSelect} name="issues" placeholder="issues"/>

        </CustomBox>
        <CustomBox>
        <SearchSelect options={options} onSelect={onSelect} name="second" placeholder="issues"/>

        </CustomBox>
        <CustomBox>
        <SearchSelect  options={options} onSelect={onSelect} name="third" placeholder="issues"/>

        </CustomBox>
      </Stack>
    )
}

export default SelectSearchContainer
