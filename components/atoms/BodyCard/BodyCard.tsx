import * as React from 'react';
import { Text,Stack,Link } from '@chakra-ui/core';

type props ={
    header:string;
    body:string;
};


const BodyCard = ({header,body}:props) => {
    return (
      <Stack isInline align="left" spacing={1} >
          <Text >
             <Link color="black" size={'xl'} isExternal>
             {header}
             </Link>
          </Text>
          <Text>
              {body}
          </Text>
      </Stack>   
    )
}

export default BodyCard;
