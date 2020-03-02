import * as React from 'react';
import CardFooter from './CardFooter';



const issues = [
    {
        "color": "fc2929",
        "name": "bug",
        "url": "https://github.com/airbnb/javascript/labels/bug"
      },
      {
        "color": "cccccc",
        "name": "duplicate",
        "url": "https://github.com/airbnb/javascript/labels/duplicate"
      },
      {
        "color": "84b6eb",
        "name": "enhancement",
        "url": "https://github.com/airbnb/javascript/labels/enhancement"
      },
      {
        "color": "84b6eb",
        "name": "enhancement",
        "url": "https://github.com/airbnb/javascript/labels/enhancement"
      },
      {
        "color": "84b6eb",
        "name": "enhancement",
        "url": "https://github.com/airbnb/javascript/labels/enhancement"
      },
];


export default {
    title:'github-next-client/Molecules/CardFooter'
}

export const Standard_items = () => {
    return (
        <CardFooter issues={issues}/>
    )
};
