import { useMemo, useState } from "react";
import { BarraBusca } from "../components/BarraBusca";
import { BeeCard, type EspecieAbelha } from "../components/BeeCard";
import { BeeModal } from "../components/BeeModal";

const ESPECIES_EXEMPLO: EspecieAbelha[] = [
  {
    id: 1,
    nome: "Abelha-europeia",
    nomeCientifico: "Apis mellifera",
    habitat:
      "Florestas, campos floridos, áreas agrícolas e regiões de clima temperado, tropical e semiárido",
    descricao:
      "Uma das abelhas mais conhecidas no mundo e base da apicultura tradicional, importante pela polinização e pela produção de mel, própolis, cera e geleia real.",
  },
  {
    id: 2,
    nome: "Jataí",
    nomeCientifico: "Tetragonisca angustula",
    habitat:
      "Regiões tropicais e subtropicais, ocos de árvores, muros, frestas e áreas urbanas arborizadas",
    descricao:
      "Abelha-sem-ferrão nativa pequena, dócil e muito comum em áreas urbanas e rurais, conhecida pelo mel saboroso e por construir entrada em formato de canusdo.",
  },
  {
    id: 3,
    nome: "Mandaçaia",
    nomeCientifico: "Melipona quadrifasciata",
    habitat:
      "Matas, cerrados, florestas tropicais e subtropicais, geralmente em ocos de árvores",
    descricao:
  "Abelha-sem-ferrão nativa de médio porte, com listras amarelas marcantes no abdome e grande importância na polinização de plantas nativas e cultivadas.",
  },
  {
    id: 4,
    nome: "Uruçu-nordestina",
    nomeCientifico: "Melipona scutellaris",
    habitat:
      "Matas úmidas e áreas florestadas do Nordeste brasileiro, especialmente em cavidades de árvores grandes",
    descricao:
      "Abelha-sem-ferrão nativa robusta e dócil, muito valorizada na meliponicultura pela eficiência na polinização e pela produção de mel.",
  },
  {
    id: 5,
    nome: "Jandaíra",
    nomeCientifico: "Melipona subnitida",
    habitat:
      "Vegetação de Caatinga e áreas semiáridas do Nordeste brasileiro, em ocos de árvores e troncos",
    descricao:
      "Abelha-sem-ferrão nativa adaptada ao clima semiárido, com papel essencial na polinização da flora local e tradição na criação em regiões secas.",
  },
{
    id: 6,
    nome: "Tiúba",
    nomeCientifico: "Melipona fasciculata",
    habitat:
      "Regiões tropicais do Norte e Nordeste do Brasil, como Maranhão e Amazônia, em ocos de árvores",
    descricao:
      "Abelha-sem-ferrão nativa de grande importância ecológica e econômica na criação local, destacando-se na polinização e na produção de mel.",
  },
  {
    id: 7,
    nome: "Mamangava-de-toco",
    nomeCientifico: "Bombus morio",
    habitat:
      "Campos, cerrados, matas, áreas abertas e jardins com flores de porte maior",
    descricao:
      "Abelha grande, escura e de voo grave, conhecida pela polinização por vibração, fundamental para flores que liberam pólen com mais facilidade sob vibração.",
  },
];

export default function Especies() {
  const [busca, setBusca] = useState("");
  const [abelhaSelecionada, setAbelhaSelecionada] =
    useState<EspecieAbelha | null>(null);

  const especiesFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return ESPECIES_EXEMPLO;

    return ESPECIES_EXEMPLO.filter((especie) => {
      const nome = especie.nome.toLowerCase();
      const cientifico = especie.nomeCientifico?.toLowerCase() ?? "";
      const habitat = especie.habitat?.toLowerCase() ?? "";

      return (
        nome.includes(termo) ||
        cientifico.includes(termo) ||
        habitat.includes(termo)
      );
    });
  }, [busca]);

  return (
    <section>
      <h1>Espécies mais conhecidas</h1>

      <BarraBusca busca={busca} onBuscaChange={setBusca} />

      <div>
        {especiesFiltradas.map((abelha) => (
          <BeeCard
            key={abelha.id}
            abelha={abelha}
            onSelecionar={setAbelhaSelecionada}
          />
        ))}
      </div>

      <BeeModal
        abelha={abelhaSelecionada}
        onFechar={() => setAbelhaSelecionada(null)}
      />
    </section>
  );
}