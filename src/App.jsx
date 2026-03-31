
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pointer from './Components/Pointer'
import Priceing from './Components/Priceing'
import Steps from './Components/Steps'
import Tools from './Components/Tools'
import Workflow from './Components/Workflow'


const toolsApi = fetch("https://mocki.io/v1/5fd405c7-d0e2-4a6b-af2e-8feb7514dfca")
.then(res => res.json())

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <Pointer />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Tools toolsApi={toolsApi}></Tools>
      </Suspense>
      <Steps />
      <Priceing />
      <Workflow />
      <Footer />
    </>
  )
}

export default App
