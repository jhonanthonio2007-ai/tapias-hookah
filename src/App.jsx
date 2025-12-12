import React from 'react'
import { Navbar } from './components/Navbar'
import { NoiseOverlay } from './components/NoiseOverlay'
import { AuroraBackground } from './components/AuroraBackground'
import { SmokeCanvas } from './components/SmokeCanvas'

import { Hero } from './sections/Hero'
import { Benefits } from './sections/Benefits'
import { Flavors } from './sections/Flavors'
import { Packages } from './sections/Packages'
import { Gallery } from './sections/Gallery'
import { FAQ } from './sections/FAQ'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="app">
      <AuroraBackground />
      <SmokeCanvas />
      <NoiseOverlay />

      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Flavors />
        <Packages />
        <Gallery />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
