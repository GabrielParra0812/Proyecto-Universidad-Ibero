import './ImagePlaceholder.css';

export default function ImagePlaceholder({ label, small = false, src, alt = '' }) {
  if (src) {
    return (
      <div className={`placeholder placeholder--image${small ? ' placeholder--small' : ''}`}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`placeholder${small ? ' placeholder--small' : ''}`}>
      <span>{label}</span>
    </div>
  );
}
