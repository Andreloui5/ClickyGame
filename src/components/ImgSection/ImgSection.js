import React from 'react'
import { Row } from 'antd';
import 'antd/dist/antd.css';
import ImageCard from '../ImageCard/ImageCard'

function ImgSection(props) {
  return(
    <Row
    type="flex" 
    justify="center"
    >
    {arrayNew.forEach(item, props => {
      return (
        <ImageCard 
          id={props.id}
          src={props.src}
          alt={props.alt}
        />)
    })
    }
    </Row>
  )
}
export default ImgSection;