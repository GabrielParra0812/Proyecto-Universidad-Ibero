import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import FeatureRow from '../components/sections/FeatureRow';
import { features } from '../data/content';

export default function Features() {
  return (
    <Section>
      <h1>Funcionalidades</h1>
      <p className="muted" style={{ marginBottom: "2.5rem" }}>Todo lo que necesitas para administrar tu iglesia.</p>
      {features.map((f, i) => (
        <FeatureRow key={f.title} title={f.title} text={f.text} reverse={i % 2 === 1} />
      ))}
      <div className="center"><Button to="/contacto">Solicitar demo</Button></div>
    </Section>
  );
}
