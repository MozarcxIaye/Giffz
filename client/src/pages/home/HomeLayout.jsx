import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer"

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
};

export default HomeLayout;