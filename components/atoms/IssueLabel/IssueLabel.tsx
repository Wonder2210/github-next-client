import * as React from 'react';
import { Tag,TagLabel,Link} from '@chakra-ui/core';
import namer from  'color-namer';

type props ={
    color:string;
    name:string;
    url:string;
};

const IssueLabel = ({color,name,url}:props) => {
    const colorName = namer(color, { pick: ['basic'] });
    return (
       <Tag variantColor={colorName.basic[0].name}
       rounded="full"
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
