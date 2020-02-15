import * as React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import Search from './Search';
import { withState } from '@dump247/storybook-state';

const customState = { value:"", issues:"", second:"", third:""}

export default {
    title:"Search"
}

export const onSearch = withState(customState)(({store})=>{
    return (
        <Search input={e => store.set({value:e.currentTarget.value})}
            value={store.state.value}
            submit={e => store.reset()}
            select={e => store.set({[e.target.name]:e.target.value})}
        />
    );
})

