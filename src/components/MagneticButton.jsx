import React, { useMemo, useRef } from 'react'

export function MagneticButton({ className='', children, onClick }){
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width/2
    const y = e.clientY - rect.top - rect.height/2
    el.style.transform = `translate(${x*0.18}px, ${y*0.18}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1)' }}
    >
      {children}
    </button>
  )
}
