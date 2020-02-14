import * as React from 'react';

import SearchInput from './SearchInput';
import { ThemeProvider } from '@chakra-ui/core';
import { withState } from '@dump247/storybook-state';

export default {
    title:'Search input',
    component:SearchInput
};

export const standard = withState({value:""})(({store})=>(
    <SearchInput 
    onChange={(e)=> {
        store.set({value:e.currentTarget.value});
        
    }}
    value={store.state.value}
    placeholder="here"  />
    ));