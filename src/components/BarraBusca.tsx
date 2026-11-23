import { useRef } from "react";

interface BarraBuscaProps {
  busca: string;
  onBuscaChange: (valor: string) => void;
  placeholder?: string;
}

export function BarraBusca({
  busca,
  onBuscaChange,
  placeholder = "Buscar espécie ou hábitat...",
}: BarraBuscaProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleLimpar = () => {
    onBuscaChange("");
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={busca}
        onChange={(e) => onBuscaChange(e.target.value)}
        placeholder={placeholder}
      />
      {busca && (
        <button type="button" onClick={handleLimpar}>
          Limpar
        </button>
      )}
    </div>
  );
}