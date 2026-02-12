import { Route, Routes } from "react-router";
import Products from "./Products";

export default function App() {
  return (
    <Routes>
      <Route index element={<Products />} />
    </Routes>
  );
}
