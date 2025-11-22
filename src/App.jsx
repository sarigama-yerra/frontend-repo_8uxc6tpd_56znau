import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Deals from './components/Deals'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Deals />
      </main>
      <Footer />
    </div>
  )
}

export default App
