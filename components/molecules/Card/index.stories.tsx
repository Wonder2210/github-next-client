import * as React from 'react';
import Card from './Card';

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
]

export default {
    title:'card'
}

export const LightCard = () => {
    return (
        <Card
            body="

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper vulputate mollis. Maecenas tincidunt euismod mauris, a facilisis dui eleifend sed. Donec semper mi id purus finibus, sed convallis orci rhoncus. Pellentesque vitae lacinia risus. In ultricies felis ut auctor aliquet. Etiam sed orci vehicula, vestibulum nisl et, sodales massa. Pellentesque neque risus, tempor a lacus ut, molestie consequat lacus. Duis libero nibh, varius eu molestie id, malesuada quis eros. Etiam porttitor purus ut faucibus volutpat. Nulla et pulvinar metus. Nullam enim sem, porta id dapibus vel, pulvinar vitae felis. Donec tincidunt quis metus vitae facilisis. Pellentesque massa diam, feugiat ac nisi non, vehicula auctor neque. Curabitur nisi enim, mattis hendrerit consectetur sit amet, pharetra a velit."
            name="sib=ngle"
            issues={issues}
            header="header da"
            src="google.com"
        />
    )
}
