import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import Searchitem from './Searchitem'

const List =() =>{

    const location =useLocation()
    const [destination] =useState(location.state.destination)

    return(
        <div>
            <Navbar/>
            <Header type="list" />
            <div className='listcontainer'>
                <div className='listwrapper'>
                    <div className='listsearch'>
                        <h1 className='lstitle'>Search</h1>
                        <div className='lsitem'>
                           <label>Destination</label> 
                           <input placeholder={destination}   type='text'/>
                        </div>

                        <div className='lsitem'>
                           <label>Check-in Date</label> 
                           {/* <span>{`S{fomat{date}}`}
                            
                            </span>  */}
                        </div>

                        <div className='lsitem'>
                            <label>Options</label>
                            <div className='lsoptions'>

                            <div className='lsoptionitem'>
                               <span className='lsoptiontext'>
                                  Min price<small> per Day</small>
                                </span>  
                                <input type='numbet' className='lsoptioninput'/>
                            </div>


                            <div className='lsoptionitem'>
                               <span className='lsoptiontext'>
                                  Max price<small> per Day</small>
                                </span>  
                                <input type='numbet' className='lsoptioninput'/>
                            </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className='listresult'>
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List