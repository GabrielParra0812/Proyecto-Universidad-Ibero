import Card from '../ui/Card';
import Button from '../ui/Button';
import './PricingCard.css';

export default function PricingCard({ name, price, limit, features = [], recommended }) {
  return (
    <Card highlighted={recommended}>
      <h3>{name}{recommended ? ' · Recomendado' : ''}</h3>
      <div className="price">{price}<small> COP/mes</small></div>
      <ul>
        <li>{limit}</li>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Button to="/contacto" variant={recommended ? 'primary' : 'outline'}>Elegir plan</Button>
    </Card>
  );
}
