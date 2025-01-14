import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Navbar />

      <Outlet />
    </>
  )
};

export default HomeLayout;