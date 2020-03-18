import * as React from 'react';
import { AppProps } from 'next/app';
import { theme,ThemeProvider,CSSReset } from '@chakra-ui/core';
import {ApolloClient, InMemoryCache,IntrospectionFragmentMatcher} from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import introspectionQueryResultData from '../fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const link = createHttpLink({uri:'https://api.github.com/graphql',fetch:fetch});

const headers = setContext((_,{headers})=>{
    const token = localStorage.getItem('access_token');
    return {
        headers: {
          ...headers,
          authorization:  `Bearer ${token}` ,
        }
      }
});

const client = new ApolloClient({
    link: headers.concat(link),
    cache: new InMemoryCache({ fragmentMatcher})
});

const MyApp =({Component,pageProps}:AppProps)=>{
    return (
        <ThemeProvider theme={ theme }>
            <CSSReset/>
            <ApolloProvider client={client}>
            <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default MyApp;
