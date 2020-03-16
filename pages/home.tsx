import * as React from 'react';
import { Stack, Grid } from "@chakra-ui/core";
import { Card } from '../components/organisms/Card';
import { Search } from '../components/organisms/Search';
import { Query, } from 'react-apollo';
import { Search as SearchQuery } from '../queries';
import LoadingSpinner from '../components/LoadingSpinner';


const { Component } = React;


type tstate = { label: string; input: string; stars: string; language: string };
type SearchNodes = {
    description: string;
    url: string;
    name: string;
    openGraphImageUrl: string;
    issues: { totalCount: number; };
    stargazers: { totalCount: number; };
    labels:
    {
        totalCount: number;
        nodes: Array<{

            color: string;
            name: string;
            url: string;
        }>;
    };


}
type SearchData = { nodes?: readonly [SearchNodes] };
;
type QueryVariables = {
    query: string;
    type: string;
}


class MainContainer extends Component<{}, tstate> {
    /**
     *
     */
    constructor(props: Object) {
        super(props);
        this.state = { label: "", input: "how to contribute", stars: "", language: "" };
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
                <Grid templateColumns=" repeat(auto-fill,minmax(470px,1fr))" gap={4} justifyContent="center">
                    <Query<SearchData, QueryVariables> query={SearchQuery} variables={{ type: "REPOSITORY", query: `${this.state.stars} ${this.state.label}  language:${this.state.language} ${this.state.input}` }}>
                        {({ loading, error, data }) => {
                            if (loading) {
                                return (<LoadingSpinner />);
                            }
                            if (error?.networkError) {
                                console.log(error);
                                return (<h1>Hay un error</h1>);
                            }
                            console.log(error?.graphQLErrors);
                            console.log(data);
                            const results = data?.nodes?.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        body={item.description}
                                        name={item.name}
                                        issues={item.labels.nodes}
                                        header={item.url}
                                        image={item.openGraphImageUrl}
                                        IssuesCount={item.issues.totalCount} StarsCount={item.stargazers.totalCount}
                                    />
                                ) ;
                            })
                            return (<React.Fragment>{results}</React.Fragment>);

                        }
                        }
                    </Query>


                </Grid>
                {/* Paginacion */}

            </Stack>
        );
    }
};

export default MainContainer;

