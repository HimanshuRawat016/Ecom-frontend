import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Pricw no greater than:500</span>
      </Form.Label>
      <Form.Range min={10} max={1000} step={10}/>
    </>
  );
};

export default PriceFilterComponent;
