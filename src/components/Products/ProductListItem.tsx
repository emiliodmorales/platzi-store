import { Link } from "react-router";
import type { Product } from "../../types/product";

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <li>
      <Link to={"/products/" + product.slug}>
        {product.images.length > 0 && (
          <img
            style={{ width: "200px", height: "200px" }}
            alt={product.title}
            src={product.images[0]}
          />
        )}
        <p>
          <b>${product.price}</b>
        </p>
        <p>{product.title}</p>
      </Link>
    </li>
  );
}
