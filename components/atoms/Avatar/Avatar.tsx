import * as React from 'react';
import { Avatar as Image } from '@chakra-ui/core';

type props ={
    name:string;
    src:string;
}

const Avatar = ({src,name}:props) => {
    return (
        <Image name={name} src={src} size="xl" />
    )
}

export default Avatar
