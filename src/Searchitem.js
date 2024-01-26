import './searchitem.css'
import React from 'react'

const Searchitem =() =>{
    return(
        <div className='searchitem'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgk6DU7TzeT6Zfd8HyHkFkXHW-TEGNll_uHcrZckPYmOhv0IZjGxVTM80XXHQrN1c7XA&usqp=CAU' 
            alt='' 
            className='siimg' 
            />
            <div className='sidesc'>
               <h1 className='sititle'>Rajeshwari Kalyana Mandapam</h1>
               <span className='sidistance'>2KM from Airport</span>
               <span className='sicancelop'>Free cancellation</span> 
            </div>
            <div className='sidetails'>
                <div className='sirating'>
                    <span>Excellent</span>
                    <button>8.4</button>
                </div>
                <div className='sidetailtexts'>
                    <span className='siprice'>$400</span>
                    <span className='sitaxop'>Includes taxes and fees</span>
                    <button className='sicheckbutton'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default Searchitem
