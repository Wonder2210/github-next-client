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
    image:string;
    header:string;
    body:string;
    
}

const Card = ({issues,image,header,body,name}:props)=>{
    return(
       <Box shadow={'lg'} padding={4}>
        <Stack isInline justifyContent="start"  spacing={8}>
            <Box  >
            <Avatar name={name} src={image} />
            </Box>
           <Box >
           <BodyCard header={header} body={body} />
           </Box>
        </Stack>
        <Stack spacing={1} isInline padding={1}>
            {issues.map((item,index)=>{
                return( <IssueLabel {...item} /> )
            })}
        </Stack>
       </Box>
    );
}

export default Card;