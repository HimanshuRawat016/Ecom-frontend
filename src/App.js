import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import LogIN from "./pages/LogIN";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import RegisterPage from "./pages/RegisterPage";
import UserCartDeatilsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDeatilsPage from "./pages/user/UserOrderDetailsPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponents from "./components/ProtectedRoutesComponents";
import AdminAnalyticsPages from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPages from "./pages/admin/AdminChatsPages";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetialsPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUserPage from "./pages/admin/AdminUserPage";

//components

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components

import RouteWithUserChatComponent from "./components/users/RouteWithUserChatComponent";

import ScrollToTop from "./utills/scrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LogIN />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not Exist 404" />

          {/* user protected files  */}
          <Route element={<ProtectedRoutesComponents />} admin={false}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrderPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDeatilsPage />}
            />
            <Route
              path="/user/order-details"
              element={<UserOrderDeatilsPage />}
            />
          </Route>
        </Route>

        {/* admin protectred pages  */}

        <Route element={<ProtectedRoutesComponents />} admin={true}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPages />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPages />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
