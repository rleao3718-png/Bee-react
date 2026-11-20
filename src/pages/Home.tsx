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
    </>
  )
}