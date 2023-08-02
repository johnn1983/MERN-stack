import { useState, useEffect } from 'react'
// import { About } from "./components/about";
import { Header } from './components/header'
import { NewHeader } from './components/new/header'
import { Future } from './components/new/future'
import { Cover } from './components/new/cover'
import { Income } from './components/new/Income'
// import { Gallery } from './components/gallery'
import { Predict } from './components/new/predict'
import Welcome from './components/welcome'
import Dontcover from './components/dontcover'
import { Peaceofmind } from './components/peaceofmind'
import { Allprotection } from './components/allprotection'
import { Morestories } from './components/morestories'
import { Video } from './components/video'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Navigation } from './components/navigation'

import './App.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      {' '}
      <>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Welcome />
        <Future />
        <Video />
        <Cover />
        <Dontcover />
        <Income />
        {/* <Peaceofmind /> */}
        <Allprotection />
        {/* <Gallery /> */}
        <Predict />
        <Morestories />
        <NewHeader />
        <Footer data={landingPageData.Footer} />
      </>{' '}
    </div>
  )
}
console.log(__dirname);

export default Home
