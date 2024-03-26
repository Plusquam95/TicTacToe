import { useState } from "react";
import "./Nav.css";

export function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <section className={`content-nav ${openNav ? "active" : ""}`}>
        <nav className="nav">
          <ul className="nav-list">
            <li>Proyectos</li>
            <li>Vanilla JS</li>
            <li>React JS</li>
            <li>
              <div className="perfil">
                <img
                  src="https://lh3.googleusercontent.com/ogw/AF2bZyg3qQIBB3jtT6OP0bYnXt40EQBT5PESr6XtPl8THg=s64-c-mo"
                  alt=""
                />
                <span>Erwin Ramos</span>
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <section className="toggle-menu" onClick={toggleNav}>
        <i className={`bx bx-md ${openNav ? "bx-x" : "bx-menu"}`}></i>
      </section>
    </>
  );
}
