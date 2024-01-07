import React, {memo} from 'react';

import './Style/card.css'
const Card = (prop) => {
  return (
    <>
    <div className="card-item" style={{background:`url("${prop.fetchedData.urls.raw}")`}}>
        <h3>{prop.fetchedData.user.name}</h3>
        <p>{prop.fetchedData.description}</p>
    </div>
    
    </>
  )
}


export default memo (Card);
