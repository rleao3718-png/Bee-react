import { useEffect, useState } from 'react'

type HeroProps = {
  titulo: string
  subtitulo: string
  meta: number
}

export default function Hero({ titulo, subtitulo, meta }: HeroProps) {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    const passo = Math.ceil(meta / 50)
    const timer = setInterval(() => {
      setContador((atual) => {
        if (atual + passo >= meta) {
          clearInterval(timer)
          return meta
        }
        return atual + passo
      })
    }, 30)
    return () => clearInterval(timer)
  }, [meta])

  return (
    <section className="hero">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <p className="hero-numero">{contador.toLocaleString('pt-BR')}</p>
      <p>espécies de abelhas descritas no mundo</p>
    </section>
  )
}