import React from 'react'
import "./home.css"
import Navbar from './Navbar.js'
import Header from './Header.js'
import Featured from './Featured.js'
import Propertylist from './Propertylist.js'
import Featuredproperti from './Featuredproperti.js'
import Maillist from './Maillist.js'
import Footer from './Footer.js'

const Home =() =>{
    return(
        <div>
            <Navbar />
            <Header />
            <div className='homecontainer'>
                <Featured/>
                <h1 className='hometitle'>Brows by property type</h1>
                <Propertylist />
                <h1 className='hometitle'>Hall People Love</h1>
                <Featuredproperti />
                <Maillist />
                <Footer />
            </div>
        </div>
    )
}

export default Home