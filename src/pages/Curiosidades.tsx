import FactCard from '../components/FactCard'

const fatos = [
  'As asas das abelhas batem 180 vezes por segundo.',
  'Uma abelha voa a uma velocidade de 25 km/hora.',
  'A abelha rainha vive até dois anos, enquanto as operárias não duram mais que um mês e meio.',
  'As abelhas visitam quase 4 milhões de flores para produzir 1 kg de mel.',
  'As abelhas são os únicos insetos que produzem alimentos que são consumidos pelos humanos.',
  'Numa viagem para coleta de néctar, a abelha chega a percorrer até 6 km.',
  'A geleia real é o único alimento da rainha durante toda sua vida.',
  'Uma abelha visita em média entre 50 e 1.000 flores por dia.',
  'Apenas as operárias (fêmeas) trabalham. A única missão dos machos (zangões) é fecundar a rainha.',
  'Nas estações mais frias do ano, quando há escassez de alimentos, os zangões são expulsos da colmeia e acabam morrendo de fome ou de frio.',
  'Uma abelha carrega o peso equivalente a 300 vezes o seu.',
  'Uma das primeiras bebidas da humanidade foi o mel fermentado.',
]

export default function Curiosidades() {
  return (
    <section className="secao curiosidades">
      <h1>Curiosidades sobre abelhas</h1>
      <p>Clique em uma carta para virar e revelar o fato.</p>
      <div className="fact-grid">
        {fatos.map((fato, indice) => (
          <FactCard key={fato} fato={fato} numero={indice + 1} />
        ))}
      </div>
    </section>
  )
}
