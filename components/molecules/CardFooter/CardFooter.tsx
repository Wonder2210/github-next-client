import * as React from 'react';
import { IssueLabel } from '../../atoms/Label';
import { Stack } from '@chakra-ui/core';

type issueLabel = {
    color:string;
    name:string;
    url:string;
}

type props = {
    issues : Array<issueLabel>;

}

const CardFooter  = ({issues}:props) => {
    return (
        <Stack spacing={1} isInline padding={1}>
        {issues.map((item,index)=>{
            return( <IssueLabel {...item} /> )
        })}
    </Stack>
    )
};

export default CardFooter;
