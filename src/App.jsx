import Audience from './components/Audience'
import Creativity from './components/Creativity'
import DownloadCta from './components/DownloadCta'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <Creativity />
        <Audience />
        <DownloadCta />
      </main>
      <Footer />
    </>
  )
}
