import './Section.css';

export default function Section({ variant = 'default', children }) {
  return (
    <section className={`section section--${variant}`}>
      <div className="container">{children}</div>
    </section>
  );
}
