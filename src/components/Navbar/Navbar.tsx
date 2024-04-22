import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FormEvent, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
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
    </div>
  );
};

export default Navbar;
