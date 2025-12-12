import React from 'react'
import { motion } from 'framer-motion'

export function SplitReveal({ text, as='div', className='', delay=0 }){
  const Tag = as
  const words = String(text).split(' ')
  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span className="split" aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className="w">
            <motion.span
              className="t"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ delay: delay + i*0.06, duration: 0.7, ease: [0.2,0.8,0.2,1] }}
            >
              {w}{i < words.length-1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </span>
      <style>{css}</style>
    </Tag>
  )
}

const css = `
.sr-only{
  position:absolute;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;clip:rect(0,0,0,0);
  white-space:nowrap;border:0;
}
.split{ display:inline; }
.w{
  display:inline-block;
  overflow:hidden;
  vertical-align:bottom;
}
.t{
  display:inline-block;
  will-change: transform;
}
`
