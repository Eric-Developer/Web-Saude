import Card from "react-bootstrap/Card";
import ConsultasService from "@/services/ConsultasService";
import "@/components/Usuarios/Ver-Mais/css/Especialidades.css";
export default async function Especialidades({ nome }) {
  const especialidades =
    await ConsultasService.pegarEspecialidadesPeloNomeDaUnidadeDeSaude(nome);

  return (
    <Card className="card-especialidades">
      <Card.Header>Especialidades</Card.Header>
      <Card.Body>
        <Card.Text>
          {especialidades.map((especialidade, index) => (
            <span key={index}>
              {especialidade.nome}
              {index !== especialidades.length - 1 ? ", " : "."}
            </span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
