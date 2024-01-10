import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Products from '../../screens/products/Products'
import Singleproducts from '../../screens/singleProduct/Singleproducts'
import Navbar from '../../components/navbar'
import Card from '../../components/card'
const Routers = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='singleproducts/:id' element={<Singleproducts />} />
                </Routes>
                
            </BrowserRouter>
        </>
    )
}
export default Routers
