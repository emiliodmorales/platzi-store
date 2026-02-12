import { Route, Routes } from "react-router";
import ProductList from "../Products/ProductList";
import ProductDetails from "../Products/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path="/products">
        <Route index element={<ProductList />} />
        <Route path=":productSlug" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
