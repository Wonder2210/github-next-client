import * as React from 'react';
import { Text,Box,Link,Heading } from '@chakra-ui/core';

type props ={
    header:string;
    body:string;
    name:string;
};


const BodyCard = ({header,body,name}:props) => {
    return (
      <Box >
          <Link color="black" href={header} fontSize="xl" fontWeight={700}  isExternal>
             {name}
             </Link>
          <Text>
              {body}
          </Text>
      </Box>   
    )
};

export default BodyCard;
