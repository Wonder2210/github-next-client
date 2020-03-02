import * as React from 'react';
import IssueLabel from './IssueLabel';
import StarsLabel from './StarsLabel';
import BugsLabel from './BugsLabel';


export default {
    title:"github-next-client/Atoms/Label "
}



export const Issue_Label = () => {
    return (
       <IssueLabel url="google.com" color="#00FFAA" name="google" />
    )
}

export const Stars_label =()=>{
    return(
        <StarsLabel number={123}/>
    )
}

export const Bugs_label =()=>{
    return(
        <BugsLabel number={234}/>
    );
}


