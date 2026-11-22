import { useState } from 'react'

interface FactCardProps {
  fato: string
  numero: number
}

export default function FactCard({ fato, numero }: FactCardProps) {
  const [virada, setVirada] = useState(false)

  return (
    <button
      className={`fact-card${virada ? ' fact-card--virada' : ''}`}
      type="button"
      onClick={() => setVirada((estadoAtual) => !estadoAtual)}
      aria-label={
        virada
          ? `Esconder o fato ${numero}`
          : `Revelar o fato ${numero}`
      }
    >
      <span className="fact-card__frente">
        <span className="fact-card__numero">{numero}</span>
        <span>Clique para revelar</span>
      </span>
      <span className="fact-card__verso">{fato}</span>
    </button>
  )
}
