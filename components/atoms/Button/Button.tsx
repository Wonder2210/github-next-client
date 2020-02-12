import * as React from "react";



type Props= {
    color : String;
}

export default ({color}:Props) => {
    
    return <button >{color}</button>
};