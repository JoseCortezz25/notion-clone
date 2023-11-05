import React from 'react'
import { Heading } from './_componentes/heading'
import { Heroes } from './_componentes/heroes'
import { Footer } from './_componentes/footer'

const MarketingPage = () => {
  return (
    <main className="min-w-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </main>
  )
}

export default MarketingPage