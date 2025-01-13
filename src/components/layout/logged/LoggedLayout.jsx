import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";
import Header from "../header/Header";

function LoggedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LoggedLayout;
