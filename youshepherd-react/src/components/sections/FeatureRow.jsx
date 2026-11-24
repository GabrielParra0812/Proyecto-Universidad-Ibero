import ImagePlaceholder from '../ui/ImagePlaceholder';
import './FeatureRow.css';

export default function FeatureRow({ title, text, image, reverse = false }) {
  return (
    <div className={`feature-row${reverse ? ' feature-row--reverse' : ''}`}>
      <ImagePlaceholder label={`Imagen: ${title}`} src={image} alt={`Vista previa de ${title}`} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
