import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/ui/FormField';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div className="login">
      <Link to="/" className="login__logo">YouShepherd</Link>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <FormField id="email" label="Correo" type="email" />
        <FormField id="password" label="Contraseña" type="password" />
        <div className="form-actions">
          <button type="submit" className="btn btn--primary btn--block">Ingresar</button>
        </div>
      </form>
      <p><Link to="/login">¿Olvidaste tu contraseña?</Link></p>
      <p><Link to="/">← Volver al sitio</Link></p>
    </div>
  );
}
