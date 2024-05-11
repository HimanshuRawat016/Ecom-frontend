import { Outlet } from "react-router";
import UserChatComponent from "./UserChatComponent";
const RouteWithUserChatComponent = () => {
    return (<>
    <UserChatComponent/> <Outlet/>
    </>
    );
}

export default RouteWithUserChatComponent;