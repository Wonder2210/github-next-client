import * as React from 'react';
import { Tag,TagLabel,Link} from '@chakra-ui/core';

type props ={
    color:string;
    name:string;
    url:string;
};

const IssueLabel = ({color,name,url}:props) => {
    return (
       <Tag variantColor={`#${color}`}
       rounded="full"
       variant="solid"
       >
           <TagLabel>
               <Link src={url} textDecoration="none">
               {name}
               </Link>
           </TagLabel>
       </Tag>
    )
}

export default IssueLabel;
