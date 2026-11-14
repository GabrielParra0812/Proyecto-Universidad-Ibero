import './FaqItem.css';

export default function FaqItem({ question, answer = 'Texto de respuesta.' }) {
  return (
    <details className="faq">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}
