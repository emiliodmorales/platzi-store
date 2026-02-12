import type { Product } from "../types/product";

const API = import.meta.env.VITE_API;
const ENDPOINT = API + "/api/v1/products";

/** Retrieve all products from the API */
export async function getProducts() {
  try {
    const response = await fetch(ENDPOINT);
    const result: Product[] = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/** Retrieve product details from the API */
export async function getProductDetails(productSlug: string,) {
  try {
    const response = await fetch(ENDPOINT + "/slug/" + productSlug);
    const result: Product = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}