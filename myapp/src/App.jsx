import React from 'react'
import Navbar from './component/nav'
import Box from './component/box'
import Hero from './component/hero'
import Text from './component/text'
import Saperate from './component/seperate'
import Query from './component/query'
import Us from './component/us'
import Cards from './component/cards'
import Blog from'./component/blog'
import Line from './component/line'
import Footer from './component/footer'
import './App.css'

function App() {
  return (
    <div>
      <div className='container'>
        <Navbar />
        <div className="main">
          <Box />
          <Hero />
        </div>
        <Saperate />
        <Text />
        <Saperate />
        <Query />

        <Saperate />
        <br></br>
        <Us />
        <br></br>
        <Saperate />
        <Cards />
        <Blog/>
      </div>
      <br/>
    <Line/>
    <br/>
    <br/>
      <Footer/>
    </div>
  )
}

export default App