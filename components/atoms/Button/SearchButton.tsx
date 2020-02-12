import * as React from 'react';
import { IconButton,Icon,IconButtonProps } from '@chakra-ui/core';

type SearchB = {
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void
}

const SearchButton = ({onClick}:SearchB) => {
    return (
        <IconButton aria-label="visible" 
        onClick={onClick}
        variantColor="blue"
        size = "sm"
        icon="search"
        />
        
    )
};

export default SearchButton;
