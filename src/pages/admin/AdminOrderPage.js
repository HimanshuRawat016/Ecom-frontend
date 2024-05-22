import AdminOrderPageComponent from "./components/AdminOrderPageComponent";
import axios from "axios";

const getOrder = async () => {
  const { data } = await axios.get("/api/orders/admin");
  return data;
};
const AdminOrdersPage = () => {
  return <AdminOrderPageComponent getOrder={getOrder} />;
};

export default AdminOrdersPage;
