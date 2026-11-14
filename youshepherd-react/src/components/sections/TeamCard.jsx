import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function TeamCard({ name }) {
  return (
    <Card>
      <div className="center">
        <ImagePlaceholder label="Foto" />
        <h3 style={{ marginTop: "1rem" }}>{name}</h3>
        <p className="muted">Cargo</p>
      </div>
    </Card>
  );
}
