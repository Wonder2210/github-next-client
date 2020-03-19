import * as React from 'react';
import {WaveSpinner} from 'react-spinners-kit';


function LoadingSpinner() {
    return (
        <React.Fragment>
        <div><WaveSpinner size={100} color={"#00ff89"}/></div>
      <style jsx>{`
     
      div {
        position:fixed;
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
      }
     
    `}</style>
      </React.Fragment>
    )
}

export default LoadingSpinner;
