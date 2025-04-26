import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar, Footer } from './components'
import { Landing } from './pages';

function App() {

  return (
    <>
    <Router>
        <section className='headerSection'>
            <NavBar/>
        </section>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className='footerSection'>
          <Footer></Footer>
        </section>
    </Router>
    </>
)}

export default App
