import { Route, Routes } from "react-router";
import ProductPage from "../Products/ProductPage";
import ProductDetails from "../Products/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route index element={<ProductPage />} />
      <Route path="/products">
        <Route index element={<ProductPage />} />
        <Route path=":productSlug" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
