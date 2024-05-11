import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCartComponent = ({category,idx}) =>{
    const images = [
        "/images/games-category.png",
        "/images/monitors-category.png",
        "/images/tablets-category.png",
        "/images/games-category.png",
        "/images/monitors-category.png",
        "/images/tablets-category.png",
        "/images/games-category.png",
        "/images/monitors-category.png",
        "/images/tablets-category.png"
    ]
    return (<>
    <Card >
      <Card.Img crossOrigin='anonymous' variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
        <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
    
    </>);
}


export default CategoryCartComponent;