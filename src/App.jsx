import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import GmgBottomWidget from './components/GmgBottomWidget'
import Footer from './components/Footer'

function App( {children} ) {
  return (
    <div>
      <Navbar/>
      {children}
      <GmgBottomWidget/>
      <Footer/>
    </div>
  )
}

export default App
