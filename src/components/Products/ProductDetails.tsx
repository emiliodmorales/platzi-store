import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../../types/product";
import Error404 from "../Layout/Error404";
import { getProductDetails } from "../../api/products";

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

  if (!product) return <>Loading...</>;

  return <>{product.title}</>;
}
