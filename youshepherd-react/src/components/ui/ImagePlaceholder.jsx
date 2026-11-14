import './ImagePlaceholder.css';

export default function ImagePlaceholder({ label, small = false }) {
  return (
    <div className={`placeholder${small ? ' placeholder--small' : ''}`}>
      <span>{label}</span>
    </div>
  );
}
