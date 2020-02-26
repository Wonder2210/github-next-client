import * as React from 'react';
import { Avatar } from '../../atoms/Avatar';
import { IssueLabel } from '../../atoms/IssueLabel';
import { BodyCard } from '../../atoms/BodyCard';
import { Stack, Box } from '@chakra-ui/core';

type issueLabel = {
    color:string;
    name:string;
    url:string;
}

type props = {
    issues : Array<issueLabel>;
    name:string;
    src:string;
    header:string;
    body:string;
    
}

const Card = ({issues,src,header,body,name}:props)=>{
    return(
       <Box shadow={'lg'}>
        <Stack isInline justifyContent="center" alignItems="center" spacing={8}>
            <Box p={3} >
            <Avatar name={name} src={src} />
            </Box>
            <BodyCard header={header} body={body} />
        </Stack>
        <Stack isInline>
            {issues.map((item,index)=>{
                return( <IssueLabel {...item}/> )
            })}
        </Stack>
       </Box>
    );
}

export default Card;