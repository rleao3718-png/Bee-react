export default function Comportamento() {
  return (
    <>
      <h1>Comportamento</h1>
      <p>
        Em uma colmeia, cada abelha tem uma função, e a colônia funciona como
        um único organismo.
      </p>

      <section className="secao">
        <h2>Quem vive na colmeia</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Rainha</h3>
            <p>
              É quem põe os ovos e mantém a colônia unida pelo seu cheiro. Pode
              colocar até cerca de 2 mil ovos por dia.
            </p>
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
        </div>
      </section>

      <section className="secao">
        <h2>Ciclo de vida</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>1. Ovo</h3>
            <p>A rainha põe um ovo em cada célula do favo.</p>
          </article>
          <article className="cartao">
            <h3>2. Larva</h3>
            <p>As operárias alimentam a larva, que cresce rapidamente.</p>
          </article>
          <article className="cartao">
            <h3>3. Pupa</h3>
            <p>A célula é fechada e o corpo da abelha se transforma.</p>
          </article>
          <article className="cartao">
            <h3>4. Adulta</h3>
            <p>
              Uma operária leva cerca de 21 dias do ovo até nascer como adulta.
            </p>
          </article>
        </div>
      </section>

      <section className="secao">
        <h2>Comunicação e defesa</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Dança do requebrado</h3>
            <p>
              Ao voltar da flor, a abelha dança dentro da colmeia para indicar
              às companheiras a direção e a distância do alimento.
            </p>
          </article>
          <article className="cartao">
            <h3>Cheiros</h3>
            <p>
              Substâncias químicas, chamadas feromônios, avisam sobre perigo,
              identificam a rainha e orientam o grupo.
            </p>
          </article>
          <article className="cartao">
            <h3>Guardas</h3>
            <p>
              Algumas operárias vigiam a entrada e barram intrusos. As abelhas
              sem ferrão defendem o ninho de outras formas, como mordendo.
            </p>
          </article>
          <article className="cartao">
            <h3>Enxameação</h3>
            <p>
              Quando a colmeia fica cheia, parte das abelhas sai com uma rainha
              para formar uma colônia nova.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}