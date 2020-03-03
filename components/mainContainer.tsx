import * as React from 'react';
import { Stack,Grid } from "@chakra-ui/core";
import {Card} from './organisms/Card';
import {Search} from './organisms/Search';
import { type } from 'os';

const { Component } = React;

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

type tstate ={ issues:string; input:string; second:string; third:string}

class MainContainer extends Component<{},tstate> {
    /**
     *
     */
    constructor(props:Object) {
        super(props);
        this.state={ issues:"", input:"", second:"", third:""};


    }

    onInput = (event:React.FormEvent<HTMLInputElement>)=>{
        console.log(event.currentTarget.value);
        this.setState({input:event.currentTarget.value});
    }

    onSelect = (event:React.FormEvent<HTMLInputElement>)=>{
         console.log(event.currentTarget.value);   
        this.setState({input:event.currentTarget.value});
    }
    onSubmit=()=>{
        console.log(this.state);
    }
  render() {
    return (
     <Stack>
         <Stack>
         <Search 
         input={this.onInput}
         select={this.onSelect}
         submit={this.onSubmit}
         value={this.state.input}
        />
         </Stack>
         <Grid templateColumns="repeat(4, 1fr)" gap={6}>
         <Card
            body="JavaScript Style Guide"
           name="Javascript"
            issues={issues}
            header="JavaScript"
            image={`https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366`}
            IssuesCount={2345} StarsCount={2345}
        />
         </Grid>

     </Stack>
    );
  }
};

export default MainContainer;
