import React from 'react';
import { StarsLabel,BugsLabel } from '../../atoms/Label';
import { Stack } from '@chakra-ui/core';

type props ={
    StarsCount:number;
    IssuesCount:number;
}

const CardHeader = ({StarsCount,IssuesCount}:props) => {
    return (
        <Stack justifyContent='flex-end' isInline>
            <StarsLabel number={StarsCount}/>
            <BugsLabel number={IssuesCount}/>
        </Stack>
    )
}

export default CardHeader
