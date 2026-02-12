import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "../../types/product";
import Error404 from "../Layout/Error404";
import { getProductDetails, getRelatedProducts } from "../../api/products";

export default function ProductDetails() {
  const { productSlug } = useParams();
  if (!productSlug) return <Error404 />;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const tryGetProductDetails = async () => {
      const product = await getProductDetails(productSlug);
      if (!product) return <Error404 />;
      setProduct(product);
    };
    tryGetProductDetails();
  }, []);

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const tryGetRelatedProducts = async () => {
      const relatedProducts = await getRelatedProducts(productSlug);
      setRelatedProducts(relatedProducts);
    };
    tryGetRelatedProducts();
  }, []);

  if (!product) return <>Loading...</>;

  return (
    <>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <h3>Related Products</h3>
      <ul>
        {relatedProducts.map((relatedProduct) => (
          <li>
            <Link to={"/products/" + relatedProduct.slug}>
              {relatedProduct.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
