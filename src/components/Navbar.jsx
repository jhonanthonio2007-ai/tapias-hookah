import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

const LINKS = [
  { label: 'Sabores', href: '#sabores' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Galería', href: '#galeria' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const onNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Tapias Hookah">
            <img src="/assets/tapias-logo.png" alt="Tapias Hookah" />
          </a>

          <div className="nav-actions">
            <MagneticButton className="btn primary" onClick={() => onNav('#cta')}>
              Reservar <ArrowUpRight size={16} />
            </MagneticButton>

            <button className="iconBtn" aria-label="Menu" onClick={() => setOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menuOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="menuPanel"
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="menuTop">
                <div className="menuBrand">
                  <img src="/assets/tapias-logo.png" alt="Tapias Hookah" />
                </div>
                <button className="iconBtn" aria-label="Close" onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="menuLinks">
                {LINKS.map((l, i) => (
                  <motion.button
                    key={l.href}
                    className="menuLink"
                    onClick={() => onNav(l.href)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <span className="menuIndex">{String(i+1).padStart(2,'0')}</span>
                    {l.label}
                  </motion.button>
                ))}
              </div>

              <div className="menuBottom">
                <div className="pill">Tapias Hookah • Premium Night Experience</div>
                <div className="menuCtas">
                  <MagneticButton className="btn primary" onClick={() => onNav('#cta')}>
                    Reservar
                  </MagneticButton>
                  <MagneticButton className="btn" onClick={() => alert('Conecta tu WhatsApp aquí')}>
                    WhatsApp
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{css}</style>
    </>
  )
}

const css = `
.nav{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(6,2,11,0.55);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav-inner{
  height: 66px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.brand img{
  height: 32px;
  width: auto;
  opacity: .92;
}
.nav-actions{
  display:flex;
  gap: 10px;
  align-items:center;
}
.iconBtn{
  height: 42px;
  width: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.9);
  cursor:pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}
.iconBtn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.22);
}

.menuOverlay{
  position: fixed;
  inset: 0;
  z-index: 80;
  display:grid;
  place-items:center;
  padding: 16px;
  background: rgba(0,0,0,0.55);
}
.menuPanel{
  width: min(720px, 100%);
  border-radius: 26px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(10,4,16,0.66);
  backdrop-filter: blur(18px);
  box-shadow: 0 30px 120px rgba(0,0,0,0.7);
  overflow:hidden;
}
.menuTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 16px 16px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.10);
}
.menuBrand img{ height: 30px; opacity: .92; }
.menuLinks{
  display:flex;
  flex-direction:column;
  padding: 16px;
  gap: 10px;
}
.menuLink{
  width:100%;
  text-align:left;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 18px;
  padding: 14px 14px;
  color: rgba(255,255,255,0.92);
  font-size: 18px;
  display:flex;
  align-items:center;
  gap: 12px;
  cursor:pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}
.menuLink:hover{
  transform: translateY(-2px);
  background: rgba(255,255,255,0.07);
  border-color: rgba(214,192,139,0.32);
}
.menuIndex{
  color: rgba(214,192,139,0.85);
  letter-spacing: .14em;
  font-size: 12px;
}
.menuBottom{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid rgba(255,255,255,0.10);
}
.menuCtas{ display:flex; gap: 10px; flex-wrap:wrap; justify-content:flex-end; }

@media (max-width: 520px){
  .menuBottom{ flex-direction:column; align-items:stretch; }
  .menuCtas{ justify-content:stretch; }
  .menuCtas .btn{ width:100%; }
}
`
