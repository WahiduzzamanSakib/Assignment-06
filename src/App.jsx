
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pointer from './Components/Pointer'
import Priceing from './Components/Priceing'
import Steps from './Components/Steps'
import Workflow from './Components/Workflow'

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <Pointer />

      <Steps />
      <Priceing />
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
