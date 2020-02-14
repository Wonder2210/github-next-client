import * as React from 'react';
import SearchSelect from './SearchSelect';
import { ThemeProvider,theme,Stack} from '@chakra-ui/core';
import {action } from '@storybook/addon-actions';

import { withState } from '@dump247/storybook-state';


export default {
    title:'Search select',
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

export const Base = ()=>{
    return(<ThemeProvider theme={theme}>
        <SearchSelect name="first" options={options} placeholder="Issues label" onSelect={e=> console.log(e)}/>
    </ThemeProvider>)
}
export const OnSelect = withState({value:""})(
    ({store})=>{
        return(<ThemeProvider theme={theme}>
            <SearchSelect name="second" options={options} placeholder="Issues label" onSelect={e=> store.set({value:e.target.value})}/>
        </ThemeProvider>)
    }
)