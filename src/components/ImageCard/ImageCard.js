import React from 'react'
import { Card, Col } from 'antd';
import 'antd/dist/antd.css';

function ImgCard(props) {

  return (
    <Col
    s={6}
    >
    <Card
      key={props.id}
      hoverable
      style={{ width: 240 }}
      cover={<img alt={props.alt} src={props.src} />}
    />
    </Col>
)
};
export default ImgCard;