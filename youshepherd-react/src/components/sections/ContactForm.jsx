import { useNavigate } from 'react-router-dom';
import FormField from '../ui/FormField';
import Button from '../ui/Button';

export default function ContactForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/gracias');
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormField id="nombre" label="Nombre" placeholder="Tu nombre" />
      <FormField id="iglesia" label="Iglesia" placeholder="Nombre de la iglesia" />
      <FormField id="correo" label="Correo" type="email" placeholder="correo@ejemplo.com" />
      <FormField id="telefono" label="Teléfono" placeholder="+57 ..." />
      <FormField id="mensaje" label="Mensaje" textarea />
      <div className="form-actions">
        <Button type="submit">Enviar solicitud</Button>
      </div>
    </form>
  );
}
