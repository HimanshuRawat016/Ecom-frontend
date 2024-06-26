import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col md={4}>
          <Image className="mt-5" fluid src="/images/games-category.png" />
          <Image className="mt-5" fluid src="/images/monitors-category.png" />
          <Image className="mt-5" fluid src="/images/tablets-category.png" />
          <Image className="mt-5" fluid src="/images/games-category.png" />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:<span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: IN Stock </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Price:<span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantiy:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    Himanshu Rawat <br />
                    <Rating initialValue={5} size={20} readonly></Rating>
                    <br />
                    2024-09-12
                    <br />
                    <p>product is good </p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a Review:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your Rating</option>
              <option value="5">5(very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">3 (awful)</option>
            </Form.Select>
            <Button className="mt-3 mb-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
