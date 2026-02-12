import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Product } from "../../types/product";
import { getProducts } from "../../api/products";

export default function Products() {
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
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

function ProductItem({ product }: { product: Product }) {
  return (
    <li>
      <Link to={"/products/" + product.slug}>{product.title}</Link>
    </li>
  );
}
