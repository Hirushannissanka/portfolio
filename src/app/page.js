import React from 'react'
import Layout from './components/Layout'
import Introduction from './components/sections/Introduction'
import Skills from './components/sections/Skills'

export default function page() {
  return (
    <Layout>
      <Introduction />
      <Skills />
    </Layout>

  )
}
