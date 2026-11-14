import Section from '../components/ui/Section';
import PricingCard from '../components/sections/PricingCard';
import FaqItem from '../components/ui/FaqItem';
import { plans, faqs } from '../data/content';

export default function Pricing() {
  return (
    <Section>
      <h1 className="center">Planes y precios</h1>
      <div className="grid" style={{ margin: '2rem 0' }}>
        {plans.map((p) => <PricingCard key={p.name} {...p} />)}
      </div>
      <h2>Preguntas frecuentes</h2>
      {faqs.map((q) => <FaqItem key={q} question={q} />)}
    </Section>
  );
}
