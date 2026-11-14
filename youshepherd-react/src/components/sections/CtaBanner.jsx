import Section from '../ui/Section';
import Button from '../ui/Button';

export default function CtaBanner({ title = '¿Listo para ver YouShepherd en acción?' }) {
  return (
    <Section variant="blue">
      <div className="center">
        <h2>{title}</h2>
        <Button to="/contacto">Solicitar demo</Button>
      </div>
    </Section>
  );
}
