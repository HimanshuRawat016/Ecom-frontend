import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => {
        setShow(false);
      }}
      dismissible
    >
      <Alert.Heading>
        Product has been succesfull added to the cart!
      </Alert.Heading>
      <Button variant="success">Go Back</Button>{" "}
      <Link to="/cart">
        <Button variant="danger">Go Back</Button>
      </Link>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
