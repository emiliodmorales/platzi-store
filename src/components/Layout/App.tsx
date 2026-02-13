import { Route, Routes } from "react-router";
import ProductPage from "../Products/ProductPage";
import ProductDetails from "../Products/ProductDetails";
import Login from "../Auth/Login";
import Account from "../Auth/Account";
import Register from "../Auth/Register";

export default function App() {
  return (
    <Routes>
      <Route index element={<ProductPage />} />
      <Route path="/products">
        <Route index element={<ProductPage />} />
        <Route path=":productSlug" element={<ProductDetails />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}
