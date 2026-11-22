import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        titulo="Mundo das Abelhas"
        subtitulo="Um guia sobre quem mantém as flores e os alimentos de pé."
        meta={20000}
      />

      <section className="secao">
        <h2>Por que as abelhas importam</h2>
        <p>
          Ao visitar flores em busca de néctar e pólen, as abelhas levam grãos
          de uma planta para outra e ajudam muitas espécies a se reproduzirem.
          Boa parte do que comemos depende desse trabalho.
        </p>
      </section>

      <section className="secao">
        <h2>Números das abelhas</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>+ de 3 mil</h3>
            <p>espécies de abelhas já registradas no Brasil.</p>
          </article>
          <article className="cartao">
            <h3>Até 60 mil</h3>
            <p>abelhas podem viver juntas em uma colmeia de abelha-do-mel.</p>
          </article>
          <article className="cartao">
            <h3>230 vezes</h3>
            <p>é quanto as asas batem por segundo, o que gera o zumbido.</p>
          </article>
        </div>
      </section>

      <section className="secao">
        <h2>Como ajudar as abelhas</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Plante flores</h3>
            <p>Flores nativas dão alimento e atraem abelhas o ano todo.</p>
          </article>
          <article className="cartao">
            <h3>Evite agrotóxicos</h3>
            <p>Os venenos contaminam o néctar e o pólen que elas coletam.</p>
          </article>
          <article className="cartao">
            <h3>Preserve ninhos</h3>
            <p>Ocos de árvores e áreas de mata são casa para muitas espécies.</p>
          </article>
          <article className="cartao">
            <h3>Deixe água por perto</h3>
            <p>Um pratinho raso com água e pedrinhas ajuda no calor.</p>
          </article>
        </div>
      </section>
    </>
  )
}