import Card from '../ui/Card';
import Button from '../ui/Button';
import './PricingCard.css';

export default function PricingCard({ name, price, limit, recommended }) {
  return (
    <Card highlighted={recommended}>
      <h3>{name}{recommended ? ' · Recomendado' : ''}</h3>
      <div className="price">{price}<small> /mes</small></div>
      <ul>
        <li>{limit}</li>
        <li>Característica 2</li>
        <li>Característica 3</li>
      </ul>
      <Button to="/contacto" variant={recommended ? 'primary' : 'outline'}>Elegir plan</Button>
    </Card>
  );
}
