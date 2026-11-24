import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© 2026 YouShepherd</span>
        <span>
          <Link to="/funcionalidades">Funcionalidades</Link> · <Link to="/precios">Precios</Link> ·{' '}
          <Link to="/nosotros">Nosotros</Link> · <Link to="/contacto">Contacto</Link>
        </span>
        <span>correo@youshepherd.com</span>
      </div>
    </footer>
  );
}
