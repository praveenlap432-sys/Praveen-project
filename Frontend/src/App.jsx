import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Registrationpage from './Registrationpage'
import Homepage from './Homepage'
import Cart from './components/cart'
import Order from './Order/Order'
function App() {
  return (
  
<Routes>
<Route path="/about" element={<About/>}/>
<Route path="/registrationpage" element={<Registrationpage/>}/>
  <Route path='/' element={<Homepage/>}/>
  <Route path ="/cart" element={<Cart/>}/>
  <Route path='/order' element={<Order/>}></Route>
</Routes>

   
  )
}

export default App