import React from 'react'

export function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="left">
          <img src="/assets/tapias-logo.png" alt="Tapias Hookah" />
          <div className="muted">© {new Date().getFullYear()} Tapias Hookah</div>
        </div>
        <div className="right">
          <a href="#sabores">Sabores</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#galeria">Galería</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      <style>{css}</style>
    </footer>
  )
}

const css = `
.footer{
  padding: 30px 0 40px;
  border-top: 1px solid rgba(255,255,255,0.10);
  background: rgba(6,2,11,0.45);
  backdrop-filter: blur(10px);
}
.footer-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 14px;
}
.left{
  display:flex;
  align-items:center;
  gap: 12px;
}
.left img{ height: 26px; opacity: .9; }
.muted{ color: rgba(255,255,255,0.60); font-size: 13px; }
.right{
  display:flex;
  gap: 14px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.right a{
  color: rgba(255,255,255,0.70);
  font-size: 13px;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.right a:hover{ color: rgba(214,192,139,0.92); }
@media (max-width: 520px){
  .footer-inner{ flex-direction:column; align-items:flex-start; }
  .right{ justify-content:flex-start; }
}
`
