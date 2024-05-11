import { Outlet,Navigate } from "react-router";
import UserChatComponent from "./users/UserChatComponent";

const ProtectedRoutesComponents = ({admin}) => {
   
   if(admin)
   {
    let adminAuth = true;
   
    return adminAuth ? <Outlet /> : <Navigate to="/login" />
   } else {
    let userAuth = true;
   
    return userAuth ? <><UserChatComponent/> <Outlet /></> : <Navigate to="/login" />
}
   }
   

export default ProtectedRoutesComponents;