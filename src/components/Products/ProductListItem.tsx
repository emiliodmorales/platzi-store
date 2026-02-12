import { Link } from "react-router";
import type { Product } from "../../types/product";

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <li>
      <Link to={"/products/" + product.slug}>{product.title}</Link>
    </li>
  );
}
