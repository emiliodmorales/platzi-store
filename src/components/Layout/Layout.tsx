import { NavLink } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>Platzi Store</h1>
        <nav>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
