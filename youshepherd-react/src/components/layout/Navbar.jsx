import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { navLinks } from '../../data/content';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú al cambiar de página
  useEffect(() => { setOpen(false); }, [pathname]);

  // Evita que la página se desplace por detrás del menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className={`navbar${open ? ' is-open' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="logo">YouShepherd</Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <div id="menu-principal" className="navbar__menu">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => `navbar__link${isActive ? ' is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/login" className={({ isActive }) => `navbar__link${isActive ? ' is-active' : ''}`}>
            Iniciar sesión
          </NavLink>
          <Button to="/contacto">Solicitar demo</Button>
        </div>
      </div>
    </nav>
  );
}
