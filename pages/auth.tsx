import * as React from 'react';
import { GetServerSideProps } from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import LoadingSpinner from '../components/LoadingSpinner';
import fetch from 'isomorphic-unfetch';

interface Props {
  errorMessage?: string;
  accessToken?:string;
}

const Page = ({ errorMessage,accessToken }:Props) => {
      const router = useRouter();
      React.useEffect(()=>{

        if (accessToken) {
          router.push('/home');
        console.log("we are here");
        
        localStorage.setItem('access_token',accessToken);
      }
    });
    
    if (errorMessage){
      return (<Error statusCode={401} title={errorMessage}/>);
    }
    return (<LoadingSpinner/>);
 

}

export const getServerSideProps: GetServerSideProps = async (context)=>{
   const {code} = context.query;
  
   const GITHUB_CLIENT_SECRET  = process.env.GITHUB_CLIENT_SECRET;
   const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  
      
  const bodyData = JSON.stringify({
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
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

  return {
    props:{
      errorMessage:error_description?? null,
      accessToken:access_token ?? null
    
  }} ;
 } catch (error) {
  return {
    props:{
      errorMessage:'ha habido un error',
      accessToken:''
    }
  } ;
   
 }
};

export default Page;