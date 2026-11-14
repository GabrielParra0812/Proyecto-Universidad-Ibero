import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function ThankYou() {
  return (
    <Section>
      <div className="center" style={{ maxWidth: "35rem", margin: '0 auto' }}>
        <h1>¡Gracias!</h1>
        <p>Recibimos tu solicitud. Te contactaremos pronto.</p>
        <Button to="/">Volver al inicio</Button>
      </div>
    </Section>
  );
}
