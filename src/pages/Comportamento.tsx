export default function Comportamento() {
  return (
    <>
      <h1>Comportamento</h1>
      <p>
        Em uma colmeia, cada abelha tem uma função, e a colônia funciona como
        um único organismo.
      </p>

      <div className="cartoes">
        <article className="cartao">
          <h3>Rainha</h3>
          <p>É quem põe os ovos e mantém a colônia unida pelo seu cheiro.</p>
        </article>
        <article className="cartao">
          <h3>Operárias</h3>
          <p>
            Limpam, cuidam das larvas, constroem os favos, defendem a entrada
            e saem para buscar alimento.
          </p>
        </article>
        <article className="cartao">
          <h3>Zangões</h3>
          <p>São os machos, e sua função principal é acasalar com a rainha.</p>
        </article>
        <article className="cartao">
          <h3>Dança do requebrado</h3>
          <p>
            Ao voltar da flor, a abelha dança dentro da colmeia para indicar às
            companheiras a direção e a distância do alimento.
          </p>
        </article>
      </div>
    </>
  )
}