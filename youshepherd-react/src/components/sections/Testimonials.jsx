import Section from '../ui/Section';
import Card from '../ui/Card';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <Section>
      <h2>Testimonios</h2>
      <div className="grid">
        {testimonials.map((t) => (
          <Card key={t.author}>
            <p>{t.text}</p>
            <p className="muted">{t.author}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
