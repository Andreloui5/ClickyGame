import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./style.css"


export function ImageCard({image}) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered); 


  return (
    <Card style={{float:'left'}}>
      <Card.Img 
      className={hovered ? 'img-container shadow-lg' : 'img-container'}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} 
      // onClick={image.handleclick}
      src={image || "https://placehold.it/300x300"} />
    </Card>
  );
}

export default ImageCard;