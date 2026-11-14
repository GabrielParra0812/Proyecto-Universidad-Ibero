import './FormField.css';

export default function FormField({ id, label, textarea = false, ...props }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Tag id={id} rows={textarea ? 4 : undefined} {...props} />
    </div>
  );
}
