import * as React from 'react';
import {Tag,TagLabel,Icon} from '@chakra-ui/core';

type props ={
    number:number;
}

const StarsLabel = ({number}:props) => {
    return (
        <Tag variantColor={'yellow'} variant={'outline'} rounded="full">
            <Icon name="star"/>
            <TagLabel>
                Stars {number}
            </TagLabel>
        </Tag>
    )
}

export default StarsLabel
