import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

import { useState, useEffect } from "react";

const UserProductPageComponent = ({ getProductList, deleteProduct }) => {
  const [productList, setProductList] = useState([]);
  const [deletedProduct, setDeleteProduct] = useState([false]);

  useEffect(() => {
    getProductList().then((res) => {
      setProductList(res);
    });
  }, [deletedProduct]);
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      const checkDelete = await deleteProduct(id);
      if (checkDelete.message === "product removed") {
        setDeleteProduct(true);
      }
    }
  };
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <LinkContainer to={`/admin/edit-product/${product._id}`}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserProductPageComponent;
