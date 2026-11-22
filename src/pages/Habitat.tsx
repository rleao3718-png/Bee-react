export default function Habitat() {
  return (
    <>
      <h1>Hábitat</h1>
      <p>
        As abelhas vivem em quase todos os ambientes, de florestas e cerrados a
        quintais de cidades. Elas precisam de flores por perto e de um lugar
        protegido para fazer o ninho.
      </p>

      <section className="secao">
        <h2>Onde fazem o ninho</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Ocos de árvores</h3>
            <p>Abrigo natural usado por muitas espécies, nativas ou não.</p>
          </article>
          <article className="cartao">
            <h3>Solo</h3>
            <p>Algumas espécies escavam cavidades na terra para nidificar.</p>
          </article>
          <article className="cartao">
            <h3>Muros e telhados</h3>
            <p>Em cidades, as abelhas aproveitam frestas e espaços protegidos.</p>
          </article>
          <article className="cartao">
            <h3>Caixas de criação</h3>
            <p>Na apicultura e na meliponicultura, o ninho fica em caixas.</p>
          </article>
        </div>
      </section>

      <section className="secao">
        <h2>Abelhas nos biomas brasileiros</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Mata Atlântica</h3>
            <p>Casa de espécies sem ferrão, como a uruçu.</p>
          </article>
          <article className="cartao">
            <h3>Cerrado</h3>
            <p>Flores de várias épocas sustentam muitas abelhas nativas.</p>
          </article>
          <article className="cartao">
            <h3>Caatinga</h3>
            <p>As abelhas acompanham a floração, que depende das chuvas.</p>
          </article>
          <article className="cartao">
            <h3>Amazônia</h3>
            <p>Floresta com grande variedade de abelhas e plantas polinizadas.</p>
          </article>
        </div>
      </section>

      <section className="secao">
        <h2>Alimento e ameaças</h2>
        <div className="cartoes">
          <article className="cartao">
            <h3>Raio de voo</h3>
            <p>
              Dependendo da espécie, de 500 metros a 3 quilômetros ao redor do
              ninho.
            </p>
          </article>
          <article className="cartao">
            <h3>Floração</h3>
            <p>
              A oferta de flores muda mês a mês, e a colônia acompanha o
              calendário da região.
            </p>
          </article>
          <article className="cartao">
            <h3>Desmatamento</h3>
            <p>Reduz os ocos de árvores e as flores de que elas dependem.</p>
          </article>
          <article className="cartao">
            <h3>Agrotóxicos</h3>
            <p>Contaminam o néctar e o pólen e podem enfraquecer a colônia.</p>
          </article>
        </div>
      </section>
    </>
  )
}