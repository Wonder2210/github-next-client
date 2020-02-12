import React from "react";
import ColorButton from "./Button";
import SearchButton from './SearchButton';
import {action} from '@storybook/addon-actions';
import { ThemeProvider} from '@chakra-ui/core';


export default {
    title:'Button'
};

export const re = ()=>(<ColorButton color="red" />);

export const blue = () => (<ColorButton color="blue" />);

export const search = () => (<ThemeProvider>
    <SearchButton onClick={  action('button click')}/>
</ThemeProvider>);