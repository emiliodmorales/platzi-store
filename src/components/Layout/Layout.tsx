import { NavLink } from "react-router";
import { useAuth } from "../Auth/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { token, logout } = useAuth();

  return (
    <>
      <header>
        <h1>Platzi Store</h1>
        <nav>
          <NavLink to="/products">Products</NavLink>
          {token ? (
            <>
              <NavLink to="/account">Account</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
