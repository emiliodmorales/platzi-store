import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./components/Layout/App.tsx";
import Layout from "./components/Layout/Layout.tsx";
import "./index.css";
import { AuthProvider } from "./components/Auth/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
