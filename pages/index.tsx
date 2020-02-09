import * as React from 'react';
import { Button } from "@chakra-ui/core";

const index = ()=>{
    return (
        <Button onClick={()=>console.log("heres")}>
            Click here
        </Button>
    );
}

export default index;