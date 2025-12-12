import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'

const FLAVORS = [
  { name: 'Grape Mint', tag: 'Menta' },
  { name: 'Blueberry Ice', tag: 'Frutal' },
  { name: 'Peach', tag: 'Dulce' },
  { name: 'Watermelon', tag: 'Frutal' },
  { name: 'Lemon Mint', tag: 'Menta' },
  { name: 'Citrus Mix', tag: 'Mix' },
  { name: 'Double Apple', tag: 'Clásico' },
  { name: 'Pineapple', tag: 'Frutal' },
  { name: 'Strawberry', tag: 'Dulce' },
  { name: 'Mint', tag: 'Menta' },
]

const TAGS = ['Todos', 'Frutal', 'Dulce', 'Menta', 'Mix', 'Clásico']

export function Flavors(){
  const [tag, setTag] = useState('Todos')
  const list = useMemo(() => tag === 'Todos' ? FLAVORS : FLAVORS.filter(f => f.tag === tag), [tag])

  return (
    <section className="section" id="sabores">
      <div className="container">
        <Reveal>
          <div className="kicker">Sabores</div>
          <h2 className="h2">Destacados</h2>
          <p className="p">Corto, visual, fácil de escoger.</p>
        </Reveal>

        <div className="tags">
          {TAGS.map((t) => (
            <button
              key={t}
              className={"tag " + (t === tag ? 'active' : '')}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid flavorGrid">
          {list.map((f, i) => (
            <Reveal key={f.name} delay={0.02*i}>
              <motion.div className="card flavor" whileHover={{ y: -4 }}>
                <div className="name">{f.name}</div>
                <div className="meta">{f.tag}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.tags{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
  margin-top: 16px;
}
.tag{
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.74);
  cursor:pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}
.tag:hover{ transform: translateY(-2px); border-color: rgba(214,192,139,0.28); }
.tag.active{
  color: rgba(255,255,255,0.92);
  border-color: rgba(214,192,139,0.38);
  background: linear-gradient(135deg, rgba(214,192,139,0.18), rgba(123,44,255,0.14));
}
.flavorGrid{
  margin-top: 16px;
  grid-template-columns: 1fr;
}
.flavor{
  padding: 14px 16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.name{ font-weight: 650; letter-spacing: -0.01em; }
.meta{ color: rgba(214,192,139,0.85); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
@media (min-width: 900px){
  .flavorGrid{ grid-template-columns: repeat(3, 1fr); }
  .flavor{ padding: 16px 18px; }
}
`
