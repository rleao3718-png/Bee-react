import type { EspecieAbelha } from "./BeeCard";

interface BeeModalProps {
  abelha: EspecieAbelha | null;
  onFechar: () => void;
}

export function BeeModal({ abelha, onFechar }: BeeModalProps) {
  if (!abelha) return null;

  return (
    <div
      onClick={onFechar}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          color: "#111111",
          padding: "24px",
          borderRadius: "10px",
          maxWidth: "480px",
          width: "100%",
}}
      >
        <button type="button" onClick={onFechar}>
          Fechar
        </button>
        {abelha.imagem && <img src={abelha.imagem} alt={abelha.nome} />}
        <h2>{abelha.nome}</h2>
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
      </div>
    </div>
  );
}