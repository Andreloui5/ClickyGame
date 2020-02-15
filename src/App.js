import React, {useState, useEffect} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Container,Row,Col,CardColumns} from 'react-bootstrap';   
import ImageCard from './components/ImageCard/ImageCard';
import friends from './friends.json';


function App() {
  const [images, setImages] = useState(friends);
  const [clicked, setClicked] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setImages()
  //   console.log(images);
  // }, []);

  // function setImages() {
    
  // }

  function handleClick(e) {
    const { id, value } = e.target;
    setClicked({...clicked, [id]: value})
    console.log(clicked)
    setCount(count + 1)
  };

  const self = this;

  return (
    <div className={"bg"}>
      <Jumbotron className={"Jbg"}>
      <Container>
        <h1 className={"col-sm-12"}>Clicky Game</h1>
        <p className={"col-sm-6"}>
          Click on an image, and watch the cards shuffle! Then, click again. <br></br>
          The longer you go without clicking the same image, the higher your score!<br></br>
        </p>
        <h3 className={"col-sm-6"}>Your score is currently {count}</h3>
      </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col size="xs-12">
            <CardColumns>
            {console.log(images)}
              {images.map(item => {
                return (
                  <ImageCard
                    key={item.id}
                    image={item.image}
                    onClick={() => self.handleClick}
                  />
                );
              })}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
