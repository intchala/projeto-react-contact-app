import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className="col-md-12 text-balck py-1">
      <nav className="navbar bg-success navbar-dark shadow">
        <Link to={"/"} className="navbar-brand ml-5">
          <h4>INÍCIO</h4>
        </Link>
      </nav>
      <h1 className="ag text-center shadow p-1">AGENDA DE CONTATO</h1>
    </div>
  );
};

export default Navbar;
