import React from "react";

const Navbar = ({ totalNotes }) => {
  return (
    <section className="nav">
      <h1 className="logo">FireNote</h1>
      <p className="submit-btn">
        Total notes - <span>{totalNotes}</span>
      </p>
    </section>
  );
};

export default Navbar;
