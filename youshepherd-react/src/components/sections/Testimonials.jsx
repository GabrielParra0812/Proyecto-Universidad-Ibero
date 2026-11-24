import Section from '../ui/Section';
import Card from '../ui/Card';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <Section>
      <h2>Pensado para tu iglesia</h2>
      <div className="grid">
        {testimonials.map((t) => (
          <Card key={t.author}>
            <h3>{t.author}</h3>
            <p>{t.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
