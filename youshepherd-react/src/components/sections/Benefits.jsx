import Section from '../ui/Section';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { benefits } from '../../data/content';

export default function Benefits() {
  return (
    <Section variant="muted">
      <h2>Tres beneficios clave</h2>
      <div className="grid">
        {benefits.map((b) => (
          <Card key={b.title} to="/funcionalidades">
            <ImagePlaceholder label="Ícono" small src={b.icon} alt={`Ícono de ${b.title}`} />
            <h3 style={{ marginTop: "1rem" }}>{b.title}</h3>
            <p>{b.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
