import UserPageComponents from "./components/UserPageComponents";
import axios from "axios";

const fetchUsers = async (ctrlabrt) => {
  const { data } = await axios.get("/api/users", {
    signal: ctrlabrt.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};

const AdminUsersPage = () => {
  return <UserPageComponents fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
