import * as React from 'react';
import { Stack, Grid } from "@chakra-ui/core";
import { Card } from '../components/organisms/Card';
import { Search } from '../components/organisms/Search';

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

type tstate = { label: string; input: string; stars: string; language: string }

class MainContainer extends Component<{}, tstate> {
    /**
     *
     */
    constructor(props: Object) {
        super(props);
        this.state = { label: "", input: "", stars: "", language: "" };
    }

    onInput = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        this.setState({ input: event.currentTarget.value });
    }

    onSelect = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.name);
        const nState = { [event.currentTarget.name]: event.currentTarget.value } as Pick<tstate, keyof tstate>
        this.setState(nState);
    }
    onSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <Stack>
                {/* Boton de log out */}
                <Stack padding={2} justifyContent="center" alignItems="center" flexGrow={1}>
                    <Search
                        input={this.onInput}
                        select={this.onSelect}
                        submit={this.onSubmit}
                        value={this.state.input}
                    />
                </Stack>
                <Grid templateColumns=" repeat(auto-fill,minmax(470px,1fr))"  gap={4} justifyContent="center">
                    <Card
                        body="JavaScript Style Guide"
                        name="Javascript"
                        issues={issues}
                        header="JavaScript"
                        image={`https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366`}
                        IssuesCount={2345} StarsCount={2345}
                    />
                    <Card
                        body="JavaScript Style Guide"
                        name="Javascript"
                        issues={issues}
                        header="JavaScript"
                        image={`https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366`}
                        IssuesCount={2345} StarsCount={2345}
                    />
                    <Card
                        body="JavaScript Style Guide"
                        name="Javascript"
                        issues={issues}
                        header="JavaScript"
                        image={`https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366`}
                        IssuesCount={2345} StarsCount={2345}
                    />
                </Grid>
                {/* Paginacion */}

            </Stack>
        );
    }
};

export default MainContainer;
