import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ to, highlighted = false, children }) {
  const className = `card${highlighted ? ' card--highlighted' : ''}`;
  if (to) return <Link to={to} className={`${className} card--link`}>{children}</Link>;
  return <div className={className}>{children}</div>;
}
