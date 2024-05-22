import AdminOrderDetailsPageComponent from "./components/AdminOrderDetailPageComponent";

import axios from "axios";

const getData = async (id) => {
  const { data } = await axios.get("/api/orders/user/" + id);
  console.log("api", "/api/orders/user/" + id);
  console.log("Fetched Data:", data);
  return data;
};
const AdminOrderDetailsPage = () => {
  return <AdminOrderDetailsPageComponent getData={getData} />;
};

export default AdminOrderDetailsPage;
