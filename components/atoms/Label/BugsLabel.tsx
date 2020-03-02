import * as React from 'react';
import {Tag,TagLabel,Icon} from '@chakra-ui/core';

type props ={
    number:Number;
}

const StarsLabel = ({number}:props) => {
    return (
        <Tag variantColor={'red'} variant={'outline'} rounded="full">
            <Icon name="warning"/>
            <TagLabel>
                Issues {number}
            </TagLabel>
        </Tag>
    )
}

export default StarsLabel
