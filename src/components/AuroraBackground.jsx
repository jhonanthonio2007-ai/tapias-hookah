import React from 'react'

export function AuroraBackground(){
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <style>{css}</style>
    </>
  )
}

const css = `
.aurora{
  position: fixed;
  inset: -40vh -40vw;
  z-index: -3;
  filter: blur(40px);
  opacity: 0.8;
  pointer-events:none;
}
.blob{
  position:absolute;
  width: 60vmax;
  height: 60vmax;
  border-radius: 999px;
  mix-blend-mode: screen;
  animation: floaty 18s ease-in-out infinite;
}
.b1{
  left: -10vmax;
  top: 10vmax;
  background: radial-gradient(circle at 30% 30%, rgba(123,44,255,0.80), rgba(214,192,139,0.18), transparent 60%);
}
.b2{
  right: -18vmax;
  top: -12vmax;
  background: radial-gradient(circle at 40% 40%, rgba(214,192,139,0.60), rgba(123,44,255,0.16), transparent 62%);
  animation-delay: -6s;
}
.b3{
  left: 10vmax;
  bottom: -18vmax;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(123,44,255,0.18), transparent 62%);
  animation-delay: -10s;
}

@keyframes floaty{
  0%{ transform: translate3d(0,0,0) scale(1); }
  50%{ transform: translate3d(4vmax,-3vmax,0) scale(1.08); }
  100%{ transform: translate3d(0,0,0) scale(1); }
}
`
