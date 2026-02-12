import { Route, Routes } from "react-router";
import Products from "../Products/Products";
import ProductDetails from "../Products/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path="/products">
        <Route index element={<Products />} />
        <Route path=":productSlug" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
