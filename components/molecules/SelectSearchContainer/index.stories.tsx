import * as React from 'react';
import SelectSearchContainer from './SelectSearchContainer';
import {ThemeProvider} from '@chakra-ui/core';

import { withState } from '@dump247/storybook-state';


export default {
    
    title:" github-next-client/Molecules/Search select container"
}

export const custom = withState({value:"",name:""})(({store})=>{
    return(
        <ThemeProvider>
                <SelectSearchContainer 
        onSelect={ e => store.set({ value:e.target.value, name:e.target.name})} />
    
        </ThemeProvider>
        );
});