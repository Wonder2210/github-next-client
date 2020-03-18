import * as React from 'react';
import {Button} from '@chakra-ui/core';

type props = {
    onClick : (e:React.MouseEvent<HTMLButtonElement>)=> void;
    content:string;
};


const NumberPage:React.FC<props>=({onClick,content})=> {
    return (
        <Button onClick={onClick}>
            {content}
        </Button>
    )
}

export default NumberPage
