import React, { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: '¿Necesito reservar?', a: 'Recomendado para asegurar mesa (sobre todo fines de semana).' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Agrega aquí: efectivo, tarjeta, etc.' },
  { q: '¿Tienen delivery?', a: 'Define si es lounge, delivery o ambos.' },
  { q: '¿Hay mínimo de edad?', a: 'Agrega el requisito según tu país/ley.' },
  { q: '¿Dónde están ubicados?', a: 'Pega tu link de Google Maps en el CTA.' },
]

export function FAQ(){
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <div className="kicker">FAQ</div>
          <h2 className="h2">Rápido y claro</h2>
        </Reveal>

        <div className="list">
          {faqs.map((f, i) => (
            <div key={f.q} className="card qa">
              <button className="q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <ChevronDown size={18} style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .2s ease' }} />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.2,0.8,0.2,1] }}
                  >
                    <div className="aInner">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.list{
  margin-top: 18px;
  display:grid;
  gap: 12px;
}
.qa{ padding: 4px; }
.q{
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.9);
  cursor:pointer;
  font-size: 16px;
  text-align:left;
}
.a{ overflow:hidden; }
.aInner{
  padding: 0 14px 14px;
  color: rgba(255,255,255,0.70);
  line-height: 1.5;
}
@media (min-width: 900px){
  .q{ font-size: 17px; padding: 16px 16px; }
}
`
