import React, { useState } from 'react';



//url을 바로 치고 들어갔을 때 state 가 없으면 home으로 Redirecting
const Detail = (props) => {

  const {location} = props;
  
  console.log(location.state)

  useState(()=>{
    const {location, history } = props;
    console.log(props);
    if(location.state === undefined) {
      history.push("/");
    }
  },[]) 
    
    

  return (
      <div className="detail">
        {location.state ? 
        <div className="detail">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <p className="movie_title" >{location.state.title}</p>
          <p className="movie_year">{location.state.year}</p>
      
        <p className="movie_summary">{location.state.summary}</p>                       
      </div> : <div className="detail">없다</div>}

      </div>
    ) 
}
   


export default Detail;
