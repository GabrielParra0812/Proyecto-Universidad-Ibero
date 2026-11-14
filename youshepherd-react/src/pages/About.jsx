import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TeamCard from '../components/sections/TeamCard';
import { team, values } from '../data/content';

export default function About() {
  return (
    <>
      <Section>
        <h1>Nuestro propósito</h1>
        <p style={{ maxWidth: "40rem" }}>
          Texto sobre la historia y el propósito del proyecto: servir a las iglesias con tecnología sencilla.
        </p>
      </Section>
      <Section variant="muted">
        <h2>Equipo</h2>
        <div className="grid">{team.map((n) => <TeamCard key={n} name={n} />)}</div>
      </Section>
      <Section>
        <h2>Valores</h2>
        <div className="grid">
          {values.map((v) => (
            <Card key={v}><h3>{v}</h3><p>Descripción breve.</p></Card>
          ))}
        </div>
        <p className="center" style={{ marginTop: "2.25rem" }}><Button to="/contacto">Solicitar demo</Button></p>
      </Section>
    </>
  );
}
