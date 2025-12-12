import React from 'react'
import { Reveal } from '../components/Reveal'
import { motion } from 'framer-motion'

const imgs = [
  '/assets/tapias-hero.png',
  '/assets/tapias-hero.png',
  '/assets/tapias-hero.png',
]

export function Gallery(){
  return (
    <section className="section" id="galeria">
      <div className="container">
        <Reveal>
          <div className="kicker">Galería</div>
          <h2 className="h2">Mood</h2>
          <p className="p">Full width. Smooth. Mobile-first.</p>
        </Reveal>
      </div>

      <div className="strip">
        <div className="track">
          {imgs.map((src, i) => (
            <motion.div key={i} className="frame card" whileHover={{ y: -6 }}>
              <img src={src} alt={"Gallery " + (i+1)} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container" id="cta">
        <div className="cta card">
          <div>
            <div className="kicker">Reserva</div>
            <div className="big">Listo(a) para el vibe.</div>
            <div className="small">Conecta WhatsApp y ubicación cuando tengas los datos.</div>
          </div>
          <div className="ctaBtns">
            <a className="btn primary" href="#" onClick={(e) => {e.preventDefault(); alert('Pega tu link de WhatsApp aquí')}}>WhatsApp</a>
            <a className="btn" href="#" onClick={(e) => {e.preventDefault(); alert('Pega tu Google Maps aquí')}}>Ubicación</a>
          </div>
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.strip{
  margin-top: 18px;
  overflow-x:auto;
  padding: 0 20px 10px;
  scroll-snap-type: x mandatory;
}
.strip::-webkit-scrollbar{ height: 10px; }
.strip::-webkit-scrollbar-thumb{ background: rgba(255,255,255,0.12); border-radius: 999px; }
.track{
  display:flex;
  gap: 14px;
  width: max-content;
  margin: 0 auto;
  padding: 8px 0;
}
.frame{
  scroll-snap-align: start;
  width: min(86vw, 560px);
  overflow:hidden;
  padding: 10px;
  border-radius: 28px;
}
.frame img{
  width: 100%;
  height: auto;
  display:block;
  border-radius: 22px;
}
.cta{
  margin-top: 26px;
  padding: 18px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap: 14px;
}
.big{
  font-size: 26px;
  line-height: 1.1;
  margin-top: 10px;
  letter-spacing: -0.02em;
}
.small{
  margin-top: 10px;
  color: rgba(255,255,255,0.66);
  line-height: 1.45;
}
.ctaBtns{
  display:flex;
  gap: 10px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
@media (max-width: 700px){
  .cta{ flex-direction:column; align-items:stretch; }
  .ctaBtns{ justify-content:stretch; }
  .ctaBtns .btn{ width:100%; }
}
@media (min-width: 900px){
  .big{ font-size: 34px; }
}
`
