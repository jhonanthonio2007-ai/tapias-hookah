import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Timer } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const items = [
  { icon: Sparkles, title: 'Calidad premium', desc: 'Selección top. Sabor limpio.' },
  { icon: Timer, title: 'Rápido y simple', desc: 'Reserva sin complicarte.' },
  { icon: ShieldCheck, title: 'Experiencia cuidada', desc: 'Ambiente y atención.' },
]

export function Benefits(){
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <Reveal>
          <div className="kicker">Experiencia</div>
          <h2 className="h2">Todo se siente premium.</h2>
          <p className="p">Sin texto largo. Solo lo esencial, bien hecho.</p>
        </Reveal>

        <div className="grid cards">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <Reveal key={it.title} delay={0.05*idx}>
                <motion.div className="card item" whileHover={{ y: -4 }}>
                  <div className="icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="title">{it.title}</div>
                    <div className="desc">{it.desc}</div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.cards{
  margin-top: 18px;
  grid-template-columns: 1fr;
}
.item{
  padding: 16px;
  display:flex;
  gap: 12px;
  align-items:flex-start;
}
.icon{
  height: 36px;
  width: 36px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  border: 1px solid rgba(214,192,139,0.28);
  background: linear-gradient(135deg, rgba(214,192,139,0.18), rgba(123,44,255,0.10));
  color: rgba(214,192,139,0.95);
}
.title{
  font-weight: 650;
  letter-spacing: -0.01em;
}
.desc{
  margin-top: 6px;
  color: rgba(255,255,255,0.68);
  line-height: 1.45;
}
@media (min-width: 900px){
  .cards{ grid-template-columns: repeat(3, 1fr); }
  .item{ padding: 18px; }
}
`
