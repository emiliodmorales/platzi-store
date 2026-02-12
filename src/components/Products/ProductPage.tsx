import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { getProducts } from "../../api/products";
import ProductListItem from "./ProductListItem";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const trySetProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    trySetProducts();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
