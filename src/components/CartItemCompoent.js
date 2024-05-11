import { Button, Col, Form, Image, ListGroupItem, Row } from "react-bootstrap";

const CartItemCompoent = () => {
  return (
    <ListGroupItem>
      <Row>
        <Col md={2}>
          <Image src="/images/games-category.png" fluid></Image>
        </Col>
        <Col md={2}>Product name </Col>
        <Col md={2}>
          <b>$83</b>{" "}
        </Col>
        <Col md={3}>
          <Form.Select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.confirm("Are you sure?")}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItemCompoent;
