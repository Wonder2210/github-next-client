import * as React from 'react';
import { Tag,TagLabel} from '@chakra-ui/core';

type props ={
    color:string;
    text:string;
}

const IssueLabel = ({color,text}:props) => {
    return (
       <Tag variantColor={color}>
           <TagLabel>{text}</TagLabel>
       </Tag>
    )
}

export default IssueLabel
