import * as React from 'react';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import {WaveSpinner} from 'react-spinners-kit';
import { NextPageContext } from 'next';

import Router from 'next/router';

interface Props {
  errorMessage?: string;
  accessToken:string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ query }: NextPageContext) {
    
    const {code} = query;
    
    const { serverRuntimeConfig: { githubClientId, githubClientSecret } } = getConfig();
        
    const bodyData = JSON.stringify({
      client_id: githubClientId,
      client_secret: githubClientSecret,
      code: code,
    });

   try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: bodyData,
    });

    const json = await res.json();

    const {access_token,error_description}= json;
    return {errorMessage:error_description,accessToken:access_token} ;
   } catch (error) {
    return {errorMessage:'ha habido un error',accessToken:null} ;
     
   }
  };
    
  componentDidMount() {
    const { accessToken } = this.props;

    if (accessToken) {
      
      localStorage.setItem('access_token',accessToken);
      Router.push('/home');
    }
  }
  

  render() {
    const { errorMessage } = this.props;
    if (errorMessage){
      return (<h2>Ha habido un error : {errorMessage}</h2>);

    }
    else{
      return (<React.Fragment>
        <div><WaveSpinner size={100} color={"#00ff89"}/></div>
      <style jsx>{`
     
      div {
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
      }
     
    `}</style>
      </React.Fragment>);
    }
    
  }
}