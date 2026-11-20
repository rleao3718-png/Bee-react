export default function Habitat() {
  return (
    <>
      <h1>Hábitat</h1>
      <p>
        As abelhas vivem em quase todos os ambientes, de florestas e cerrados a
        quintais de cidades. Elas precisam de flores por perto e de um lugar
        protegido para fazer o ninho.
      </p>

      <div className="cartoes">
        <article className="cartao">
          <h3>Ninhos</h3>
          <p>
            Ocos de árvores, buracos no solo, muros e telhados, dependendo da
            espécie.
          </p>
        </article>
        <article className="cartao">
          <h3>Alimento</h3>
          <p>
            Néctar e pólen das flores. A oferta muda ao longo do ano, e a
            colônia acompanha a floração da região.
          </p>
        </article>
        <article className="cartao">
          <h3>Ameaças</h3>
          <p>
            Desmatamento, agrotóxicos e falta de flores reduzem os lugares onde
            as abelhas conseguem viver.
          </p>
        </article>
      </div>
    </>
  )
}