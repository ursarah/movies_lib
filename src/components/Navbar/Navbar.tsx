import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div id='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie /> Movies Lib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Busque um Filme'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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