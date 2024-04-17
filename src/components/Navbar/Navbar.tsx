import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie /> Movies Lib
        </Link>
      </h2>
      <form action=''>
        <input type='text' placeholder='Busque um Filme' />
        <button type='submit'>
          <BiSearchAlt />
        </button>
      </form>
      {/* <Link to='/movie/1'>Movies</Link>
      <Link to='/search'>Search</Link> */}
    </div>
  );
};

export default Navbar;
