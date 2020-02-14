import * as React from 'react';
import SelectSearchContainer from './SelectSearchContainer';

import { withState } from '@dump247/storybook-state';
import { string } from 'prop-types';

export default {
    
    title:" Search select container"
}

export const custom = withState({value:"",name:""})(({store})=>{
    return(
        <SelectSearchContainer onSelect={ e => store.set({ value:e.target.value, name:e.target.name})} />
    );
});