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
          Creemos que la tecnología debe estar al servicio de la iglesia. YouShepherd nace para que los líderes dediquen menos tiempo a la administración y más a cuidar de las personas, con herramientas sencillas, claras y accesibles para congregaciones de cualquier tamaño.
        </p>
      </Section>
      <Section variant="muted">
        <h2>Equipo</h2>
        <div className="grid">{team.map((m) => <TeamCard key={m.name} {...m} />)}</div>
      </Section>
      <Section>
        <h2>Valores</h2>
        <div className="grid">
          {values.map((v) => (
            <Card key={v.title}><h3>{v.title}</h3><p>{v.text}</p></Card>
          ))}
        </div>
        <p className="center" style={{ marginTop: "2.25rem" }}><Button to="/contacto">Solicitar demo</Button></p>
      </Section>
    </>
  );
}
