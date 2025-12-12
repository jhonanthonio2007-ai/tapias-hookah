import React, { useEffect, useRef } from 'react'

/**
 * Lightweight smoke particle layer for the hero area.
 * It paints to a fixed canvas with very subtle alpha, so it feels premium (not 'foggy').
 */
export function SmokeCanvas(){
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let raf = 0
    let w = 0, h = 0, dpr = 1

    const particles = Array.from({ length: 42 }).map(() => spawn())

    function resize(){
      dpr = Math.min(2, window.devicePixelRatio || 1)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function spawn(){
      return {
        x: Math.random() * w,
        y: h + Math.random()*h*0.35,
        r: 40 + Math.random()*120,
        a: 0.02 + Math.random()*0.04,
        vx: (-0.12 + Math.random()*0.24),
        vy: -0.18 - Math.random()*0.26,
        t: Math.random()*Math.PI*2,
        drift: 0.25 + Math.random()*0.6,
      }
    }

    function step(){
      ctx.clearRect(0,0,w,h)

      // subtle top fade (keep lower area clearer)
      const grd = ctx.createLinearGradient(0,0,0,h)
      grd.addColorStop(0, 'rgba(255,255,255,0.12)')
      grd.addColorStop(0.38,'rgba(255,255,255,0.05)')
      grd.addColorStop(1,'rgba(255,255,255,0)')
      ctx.fillStyle = grd
      ctx.globalCompositeOperation = 'soft-light'
      ctx.fillRect(0,0,w,h)
      ctx.globalCompositeOperation = 'source-over'

      for (const p of particles){
        p.t += 0.01
        p.x += p.vx + Math.sin(p.t) * p.drift * 0.15
        p.y += p.vy
        if (p.y + p.r < -40 || p.x + p.r < -60 || p.x - p.r > w + 60){
          Object.assign(p, spawn(), { y: h + p.r + Math.random()*h*0.25 })
        }

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `rgba(255,255,255,${p.a})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    step()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <>
      <canvas ref={ref} className="smoke" aria-hidden="true" />
      <style>{css}</style>
    </>
  )
}

const css = `
.smoke{
  position: fixed;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  pointer-events:none;
  opacity: 0.55;
  mask-image: radial-gradient(circle at 60% 15%, rgba(0,0,0,1), rgba(0,0,0,0) 65%);
}
`
