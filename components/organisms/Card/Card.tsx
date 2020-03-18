import * as React from 'react';
import { CardBody } from '../../molecules/CardBody';

import { Stack, Box } from '@chakra-ui/core';


type props = {

    name:string;
    image:string;
    header:string;
    body:string;
    
}

const Card = ({image,header,body,name}:props)=>{
    return(
       <Box shadow={'xl'} borderWidth="1px" margin={4} padding={4}>
        <CardBody image={image} header={header} body={body} name={name}/>
       </Box>
    );
}

export default Card;