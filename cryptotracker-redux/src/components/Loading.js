import React from 'react'

function Loading({classname}) {
    return (
      <div className={`container ${classname}`}>
        <div className="yellow"></div>
        <div className="red"></div>
        <div className="blue"></div>
        <div className="violet"></div>
      </div>
    );
  }
  
  export default Loading;
  