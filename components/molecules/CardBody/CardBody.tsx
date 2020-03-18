import * as React from 'react';
import { Avatar, Box,Stack } from '@chakra-ui/core';
import { CardBodyContent } from '../../atoms/CardBodyContent';

type props = {

    name:string;
    image:string;
    header:string;
    body:string;
    
};

const CardBody = ({name,body,image,header}:props) => {
    return (
        <Stack isInline justifyContent="start"  spacing={8}>
            <Box  >
            <Avatar name={name} src={image} />
            </Box>
        <Box >
        <CardBodyContent header={header} body={body} name={name} />
        </Box>
    </Stack>
    )
};

export default CardBody;
