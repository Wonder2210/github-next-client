import * as React from 'react';
import Card from './Card';
import { Grid } from '@chakra-ui/core';

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
]

export default {
    title:'github-next-client/Organisms/card'
}

export const LightCard = () => {
    return (
       <Grid templateColumns="repeat(4, 1fr)" gap={6} >
          <Card
            body="JavaScript Style Guide"
           name="Javascript"
            issues={issues}
            header="JavaScript"
            image={`https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366`}
            IssuesCount={2345} StarsCount={2345}
        />
       </Grid>
    )
}
