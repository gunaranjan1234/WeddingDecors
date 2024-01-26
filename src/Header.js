import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header =({type}) =>{

    const[destination, setdestination] =useState("");

    const navigate =useNavigate();

    const handleSearch = () =>{
        navigate("/hotels",{ state:{destination} } );
    };

    return(
        <div className='header'>
            <div className='headerlist'>
                <div className='headerlistitem active'>
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div> 
            </div>
            <p>
            <button className='headerbtn'>Sign in / Register</button>
            </p>
        {   type !=="list" &&
            <>
            <div className='headersearch'>
                <div className='headersearchitem'>
                    <input type='text' 
                    placeholder='Where are you going' 
                    className='headersearchinput'
                    onChange={e=>setdestination(e.target.value)}
                    />
                </div>
                
                <div className='headersearchitem'>
                    <input type='date'
                    placeholder='Enter The Date '
                    />
                </div>
 
                {/* <div className='headersearchitem'>
                <span className='headersearchtext'>2 adult 2 children 1 room</span>
                </div> */}
                
                <div className='handelsearchitem'>
                    <button className='headerbtn' onClick={handleSearch}>Search</button>
                </div>
            </div>
            </>}
        </div>
    )
}

export default Header