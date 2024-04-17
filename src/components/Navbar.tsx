import React from "react";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>
        <Link to='/'>
          <BiCameraMovie /> home
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
