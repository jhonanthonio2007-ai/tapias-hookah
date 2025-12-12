import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'

const plans = [
  { name: 'Classic', price: '$', perks: ['1 hookah', '1 flavor', 'Mesa estándar'], featured: false },
  { name: 'Premium', price: '$$', perks: ['Hookah premium', '2 flavors', 'Carbón top'], featured: true },
  { name: 'VIP', price: '$$$', perks: ['Mesa VIP', 'Mix signature', 'Atención prioritaria'], featured: false },
]

export function Packages(){
  return (
    <section className="section" id="paquetes">
      <div className="container">
        <Reveal>
          <div className="kicker">Paquetes</div>
          <h2 className="h2">Elige tu vibe</h2>
          <p className="p">Simple. Claro. Sin relleno.</p>
        </Reveal>

        <div className="grid packGrid">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={0.04*i}>
              <motion.div className={"card plan " + (p.featured ? 'featured' : '')} whileHover={{ y: -6 }}>
                <div className="top">
                  <div>
                    <div className="name">{p.name}</div>
                    <div className="price">{p.price}</div>
                  </div>
                  {p.featured && <div className="badge">Best</div>}
                </div>

                <ul className="list">
                  {p.perks.map((x) => (
                    <li key={x}><Check size={16} /> {x}</li>
                  ))}
                </ul>

                <MagneticButton className={"btn " + (p.featured ? 'primary' : '')} onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior:'smooth' })}>
                  Reservar
                </MagneticButton>
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
.packGrid{
  margin-top: 18px;
  grid-template-columns: 1fr;
}
.plan{
  padding: 18px;
}
.plan.featured{
  border-color: rgba(214,192,139,0.34);
  background: linear-gradient(180deg, rgba(214,192,139,0.10), rgba(255,255,255,0.06));
}
.top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}
.name{
  font-weight: 700;
  letter-spacing: -0.01em;
}
.price{
  margin-top: 8px;
  color: rgba(214,192,139,0.9);
  letter-spacing: .18em;
  text-transform: uppercase;
  font-size: 12px;
}
.badge{
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(214,192,139,0.34);
  color: rgba(214,192,139,0.92);
  background: rgba(214,192,139,0.08);
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
}
.list{
  list-style:none;
  padding:0;
  margin: 14px 0 16px;
  display:grid;
  gap: 10px;
  color: rgba(255,255,255,0.72);
}
.list li{
  display:flex;
  gap: 10px;
  align-items:center;
}
@media (min-width: 900px){
  .packGrid{ grid-template-columns: repeat(3, 1fr); }
  .plan{ padding: 20px; }
}
`
