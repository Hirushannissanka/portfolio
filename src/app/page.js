import React from 'react'
import Layout from './components/Layout'
import Introduction from './components/sections/Introduction'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Experiences from './components/sections/Experiences'
import Contact from './components/sections/Contact'
import Achievements from './components/sections/Achievements'

export default function page() {
  return (
    <Layout>
      <Introduction />
      <Skills />
      <Projects />
      <Experiences />
      <Education />
      <Achievements/>
      <Contact />
    </Layout>

  )
}
