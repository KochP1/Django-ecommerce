import './App.css'
import { NavBar, Landing, Footer } from './components'

function App() {

  return (
    <>
      <section className='headerSection'>
        <NavBar/>
      </section>

      <section className='landingSection'>
        <Landing></Landing>
      </section>

      <section className='footerSection'>
        <Footer></Footer>
      </section>
    </>
)}

export default App
