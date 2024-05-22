import UserProductPageComponent from "./components/UserProductPageComponent";
import axios from "axios";

const getProductList = async () => {
  const { data } = await axios.get("/api/products/admin");
  return data;
};

const deleteProduct = async (id) => {
  const { data } = await axios.delete(`/api/products/admin/${id}`);
  return data;
};
const AdminProductsPage = () => {
  return (
    <UserProductPageComponent
      getProductList={getProductList}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsPage;
