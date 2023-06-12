 // card is used for design of corner
 import React from 'react';
 import './card.css';
 const Card = (props) => {
   const classes = 'card' + props.className;
    return <div className={classes}>{props.children}
    </div>
 };
 export default Card;