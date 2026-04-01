import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Pointer from './Components/Pointer'
import { Suspense, useState } from 'react'
import Tools from './Components/Tools'
import Steps from './Components/Steps'
import Priceing from './Components/Priceing'
import Workflow from './Components/Workflow'
import Footer from './Components/Footer'
import './App.css'
import Cart from './Components/Cart'
import { ToastContainer} from 'react-toastify';


const toolsApi = fetch("https://mocki.io/v1/5fd405c7-d0e2-4a6b-af2e-8feb7514dfca")
.then(res => res.json())

function App() {

    const [activeTab, setActiveTap] = useState("Products")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <Pointer />
      <Suspense fallback={<h1 className='flex items-center justify-center text-4xl font-bold'>Loading....</h1>}>
          <div className='text-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>

                <div className="tabs tabs-box justify-center bg-transparent my-5">
                    <input type="radio"
                     name="my_tabs_1" 
                     className="tab  rounded-full w-30 checked:bg-violet-700 checked:text-white"
                       aria-label="Products"
                       onClick={() => setActiveTap("Products")}
                       defaultChecked />

                    <input type="radio"
                     name="my_tabs_1" 
                     className="tab  rounded-full w-30 checked:bg-violet-700 checked:text-white"
                       aria-label={`Cart (${carts.length})`}
                       onClick={() => setActiveTap("Cart")} />
                </div>
           
        </div>
        {activeTab === "Products" && <Tools toolsApi={toolsApi} carts={carts} setCarts= {setCarts}></Tools>}
       { activeTab === "Cart" && <Cart carts={carts} setCarts= {setCarts}/> } 
      </Suspense>
      <Steps />
      <Priceing />
      <Workflow />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
