export interface EspecieAbelha {
  id: number | string;
  nome: string;
  nomeCientifico?: string;
  habitat?: string;
  descricao?: string;
  imagem?: string;
}

interface BeeCardProps {
  abelha: EspecieAbelha;
  onSelecionar?: (abelha: EspecieAbelha) => void;
}

export function BeeCard({ abelha, onSelecionar }: BeeCardProps) {
  return (
    <article
      onClick={() => onSelecionar?.(abelha)}
      style={{ cursor: onSelecionar ? "pointer" : "default" }}
    >
{abelha.imagem && <img src={abelha.imagem} alt={abelha.nome} />}
      <h3>{abelha.nome}</h3>
      {abelha.nomeCientifico && (
        <p>
          <em>{abelha.nomeCientifico}</em>
        </p>
      )}
      {abelha.habitat && (
        <p>
          <strong>Hábitat:</strong> {abelha.habitat}
        </p>
      )}
      {abelha.descricao && <p>{abelha.descricao}</p>}
    </article>
  );
}