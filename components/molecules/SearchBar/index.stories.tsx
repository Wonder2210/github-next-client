import * as React from 'react';
import SearchBar from './SearchBar';
import {action} from '@storybook/addon-actions';

import {ThemeProvider} from '@chakra-ui/core';

import { withState } from '@dump247/storybook-state';

export default {
    title:'github-next-client/Molecules/SearchBar',
    component:SearchBar
}

export const Default = withState({value:''})(({store})=>{
    return(<SearchBar 
        onChange={(e)=> store.set({value:e.currentTarget.value})}
        value={store.state.value}

        onClick={e=> store.set({value:""})}
        />);
    });