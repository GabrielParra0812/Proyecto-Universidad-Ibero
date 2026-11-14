import Button from '../ui/Button';
import Section from '../ui/Section';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import './Hero.css';

export default function Hero() {
  return (
    <Section>
      <div className="hero">
        <div className="hero__text">
          <h1>Menos administración, más pastoreo</h1>
          <p className="muted">Gestiona miembros, ofrendas y eventos de tu iglesia en un solo lugar, de forma simple.</p>
          <p className="hero__actions">
            <Button to="/contacto">Solicitar demo</Button>
            <Button to="/funcionalidades" variant="outline">Ver funcionalidades</Button>
          </p>
        </div>
        <div className="hero__image"><ImagePlaceholder label="Imagen: captura de la plataforma" /></div>
      </div>
    </Section>
  );
}
