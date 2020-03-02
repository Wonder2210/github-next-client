import * as React from 'react';
import { Avatar, Box,Stack } from '@chakra-ui/core';
import { BodyCard } from '../../atoms/BodyCard';

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
        <BodyCard header={header} body={body} />
        </Box>
    </Stack>
    )
};

export default CardBody;
