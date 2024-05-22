import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemCompoent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminOrderDetailsPageComponent = ({ getData }) => {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState({});
  const [paymentMehtod, setPaymentMehtod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [orderButtonMessage, setOrderButtonMessage] =
    useState("Mark as delivered");

  useEffect(() => {
    getData(id).then((order) => {
      setUserInfo(order.user);
      setPaymentMehtod(order.paymentMehtod);
      order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
      order.isDelivered
        ? setIsDelivered(order.delvieredAt)
        : setIsDelivered(false);
      setCartSubTotal(order.orderTotal.cartSubTotal);
    });
  }, []);
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.lastName}
              <br />
              <b>Address</b>: {userInfo.city} <br />
              <b>Phone</b>: {userInfo.phonenumber}
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select disabled={false}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 2022-10-02
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold">$904</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="danger" type="button">
                  Mark as delivered
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPageComponent;
