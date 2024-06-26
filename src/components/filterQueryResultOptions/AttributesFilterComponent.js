import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
    {
      [{Color:["red","blue","green"]},{Ram:["1TB","2TB"]}].map((item,idx)=>(
        <div key={idx}>
          <Form.Label>
            <b>{Object.keys(item) }</b>
          </Form.Label>
          {
            item[Object.keys(item)].map((i,idx)=>(
                <Form.Check key={idx} type="checkbox" label={i} />
            ))
          }
        </div>
      ))
    }
      
      
    </>
  );
};

export default AttributesFilterComponent;
