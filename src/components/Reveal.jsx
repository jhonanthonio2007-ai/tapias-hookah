import React from 'react'
import { motion } from 'framer-motion'

export function Reveal({ children, delay=0 }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ delay, duration: 0.7, ease: [0.2,0.8,0.2,1] }}
    >
      {children}
    </motion.div>
  )
}
