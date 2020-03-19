import * as React from 'react';
import Router from 'next/router';
import getConfig from 'next/config';
import { Button,Text,Stack } from '@chakra-ui/core';

class GithubLoginButtonContainer extends React.Component {
  handleSignIn = () => {
    const  GITHUB_CLIENT_ID  = process.env.GITHUB_CLIENT_ID;

    window.location.href=`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
   
  };

  render() {
    return (
   
        <Stack justifyContent="center" alignItems="center">
      <Text fontSize="6xl">GnClient</Text>
         <Text fontSize="1xl">Just a simple client for , easy search on github</Text>
         <Button rightIcon="arrow-forward" onClick={this.handleSignIn} variantColor="teal" variant="outline">
          Sign In
         </Button>
       
        </Stack>
   
    );
  }
};

export default GithubLoginButtonContainer;