import * as React from 'react';
import { Text,Box,Link,Heading } from '@chakra-ui/core';

type props ={
    header:string;
    body:string;
};


const BodyCard = ({header,body}:props) => {
    return (
      <Box >
          <Heading  fontSize="xl">
          <Link textDecoration="none" color="black"  isExternal>
             {header}
             </Link>
          </Heading>
          <Text>
              {body}
          </Text>
      </Box>   
    )
};

export default BodyCard;
