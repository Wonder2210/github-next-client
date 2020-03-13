import * as React from 'react';
import Router from 'next/router';
import getConfig from 'next/config';
import { Button } from '@chakra-ui/core';

class GithubLoginButtonContainer extends React.Component {
  handleSignIn = () => {
    const { publicRuntimeConfig: { githubClientId } } = getConfig();

    window.location.href=`https://github.com/login/oauth/authorize?client_id=${githubClientId}`
   
  };

  render() {
    const { publicRuntimeConfig: { githubClientId } } = getConfig();
    return (
       <React.Fragment>
          este es el env{githubClientId}
        <Button onClick={this.handleSignIn}>
        Click here
    </Button>
       </React.Fragment>
    );
  }
};

export default GithubLoginButtonContainer;