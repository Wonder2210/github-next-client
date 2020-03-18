import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MainContainer from '../components/mainContainer';

import { Search as SearchQuery } from '../queries';

type SearchNodes = {
    description: string;
    url: string;
    name: string;
    openGraphImageUrl: string;
}
type SearchData = { 
   search:{
    repositoryCount?: number; 
    nodes?: readonly [SearchNodes] 
   }
};
type variables = {
    query: string;
    first: number;
}

function home() {
    const [state, setState] = React.useState({
        input: "how to contribute",
        stars: "",
        language: "",
        results: 10

    });
    const { loading, error, data, fetchMore } = useQuery<SearchData, variables>(SearchQuery, {
        variables: {
            query: `${state.stars??`stars:>${state.stars}`} ${state.language??`language:${state.language}`} ${state.input}`,
            first: 10
        }
    });

    const more = (number:number) => {
        fetchMore({
            variables: {
                first: number
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return fetchMoreResult;
            }
        })
        setState(state => ({ ...state, number}));
    }


    const onInput = (event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setState((state) => ({...state , input: value }));
    }
    const onSelect = (event: React.FormEvent<HTMLInputElement>) => {
        const {name,value } = event.currentTarget;
        console.log(value,name);
        setState(state => ({...state, [name]: value }))
    }
    
    if (error?.networkError) {
        console.log(error);
        return (<h1>Hay un error</h1>);
    }
    

    return (<MainContainer 
        loadMore={more}
        repositoryCount={data?.search.repositoryCount}
        reposOnScreen={state.results}
        data={data} 
        loading={loading} 
        onInput={onInput} 
        onSelect={onSelect} 
        input={state.input} />);

}




export default home;