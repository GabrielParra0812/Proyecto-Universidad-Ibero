import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function TeamCard({ name, role, photo }) {
  return (
    <Card>
      <div className="center">
        <ImagePlaceholder label="Foto" src={photo} alt={`Foto de ${name}`} />
        <h3 style={{ marginTop: "1rem" }}>{name}</h3>
        <p className="muted">{role}</p>
      </div>
    </Card>
  );
}
