import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import FAQpages from "@pages/FAQpages";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/faq",
    element: <FAQpages />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
