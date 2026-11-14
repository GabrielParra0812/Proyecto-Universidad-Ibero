import Section from '../components/ui/Section';
import ContactForm from '../components/sections/ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <Section>
      <h1>Solicita tu demostración</h1>
      <div className="contact">
        <div className="contact__form"><ContactForm /></div>
        <div className="contact__info">
          <h3>Contacto</h3>
          <p>correo@youshepherd.com<br />+57 000 000 0000</p>
          <h3>¿Qué sigue?</h3>
          <ol>
            <li>Recibimos tu solicitud.</li>
            <li>Te escribimos en 24 horas.</li>
            <li>Agendamos una demo.</li>
          </ol>
        </div>
      </div>
    </Section>
  );
}
