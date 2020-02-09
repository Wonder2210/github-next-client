import React from "react"

interface Props {
    color : String
}

export default (props:Props) => {
    const {color} = props;
    return <button >{color}</button>
};