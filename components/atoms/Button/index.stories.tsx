import React from "react";
import ColorButton from "./Button";
import SearchButton from './SearchButton';
import NumberPage from './NumberPage';
import {action} from '@storybook/addon-actions';
import { ThemeProvider} from '@chakra-ui/core';


export default {
    title:'github-next-client/Atoms/Button'
};

export const re = ()=>(<ColorButton color="red" />);

export const blue = () => (<ColorButton color="blue" />);

export const search = () => (<SearchButton onClick={  action('button click')}/>);

export const NumberIndicator= () => (<NumberPage onClick={action('clicked')} content={"2"}/>)