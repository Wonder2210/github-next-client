import * as React from 'react';
import { CardFooter } from '../../molecules/CardFooter';
import { CardBody } from '../../molecules/CardBody';
import {CardHeader} from '../../molecules/CardHeader';

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
    StarsCount:number;
    IssuesCount:number;
    
}

const Card = ({issues,image,header,body,name,StarsCount,IssuesCount}:props)=>{
    return(
       <Box shadow={'lg'} padding={4}>
           <CardHeader IssuesCount={IssuesCount} StarsCount={StarsCount}/>
        <CardBody image={image} header={header} body={body} name={name}/>
        <CardFooter issues={issues}/>
       </Box>
    );
}

export default Card;