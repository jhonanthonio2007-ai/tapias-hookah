import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { MagneticButton } from '../components/MagneticButton'
import { SplitReveal } from '../components/SplitReveal'

export function Hero(){
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-left">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2,0.8,0.2,1] }}
          >
            <span className="pill"><Sparkles size={16} /> Premium Night Experience</span>
          </motion.div>

          <SplitReveal
            as="h1"
            className="hero-title"
            text="Hookah premium. Vibe impecable."
            delay={0.12}
          />

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.2,0.8,0.2,1] }}
          >
            Sabores top. Ambiente elegante. Reserva en segundos.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.6, ease: [0.2,0.8,0.2,1] }}
          >
            <MagneticButton className="btn primary" onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior:'smooth' })}>
              Reservar <ArrowUpRight size={16}/>
            </MagneticButton>
            <MagneticButton className="btn" onClick={() => document.querySelector('#sabores')?.scrollIntoView({ behavior:'smooth' })}>
              Ver sabores
            </MagneticButton>
          </motion.div>

          <motion.div
            className="trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.6 }}
          >
            <span className="pill">Ambiente premium</span>
            <span className="pill">Hookahs seleccionadas</span>
            <span className="pill">Atención rápida</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-right card"
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.2,0.8,0.2,1] }}
          whileHover={{ y: -4 }}
        >
          <img className="hero-img" src="/assets/tapias-hero.png" alt="Tapias Hookah" />
        </motion.div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.hero{
  padding: 42px 0 10px;
}
.hero-inner{
  display:grid;
  gap: 18px;
  align-items:center;
}
.hero-left{
  padding-top: 10px;
}
.hero-title{
  font-size: 40px;
  line-height: 1.0;
  margin: 18px 0 0;
  letter-spacing: -0.02em;
}
.hero-sub{
  margin: 14px 0 0;
  color: rgba(255,255,255,0.74);
  max-width: 48ch;
  line-height: 1.55;
}
.hero-ctas{
  display:flex;
  gap: 10px;
  margin-top: 18px;
  flex-wrap:wrap;
}
.trust{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
  margin-top: 18px;
  opacity: .92;
}
.hero-right{
  border-radius: 28px;
  overflow:hidden;
  padding: 10px;
}
.hero-img{
  width: 100%;
  height: auto;
  display:block;
  border-radius: 22px;
  transform: translateZ(0);
}
@media (min-width: 900px){
  .hero{ padding: 70px 0 20px; }
  .hero-inner{
    grid-template-columns: 1.05fr 0.95fr;
    gap: 22px;
  }
  .hero-title{ font-size: 64px; }
  .hero-right{ padding: 12px; }
}
`
