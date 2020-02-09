import * as React from 'react';
import { AppProps } from 'next/app';
import { theme,ThemeProvider,CSSReset } from '@chakra-ui/core';


const MyApp =({Component,pageProps}:AppProps)=>{
    return (
        <ThemeProvider theme={ theme }>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
