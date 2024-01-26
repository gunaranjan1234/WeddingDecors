import './hotel.css'
import Navbar from './Navbar.js'
import Header from './Header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Maillist from './Maillist.js'
import Footer from './Footer.js'
import { useState } from 'react'

const Hotel =() =>{

    const [slidenumber,setslidenumber] =useState(0);
    const [open,setopen] =useState(false);

    const photos= [
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/IMG-20181027-WA0020.jpg"
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/IMG-20181027-WA0028.jpg"
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/Rams-2.png"
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/Rams-16.png"
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/Rams-20.png"
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2023/09/IMG-20170824-WA0026.jpg"
        },
    ];

    const handleopen =(i) =>{
        setslidenumber(i);
        setopen(true);
    }

    const handlemove =(direction) =>{
        let newslidenumber;

        if(direction==="l"){
          newslidenumber = slidenumber === 0 ? 5 : slidenumber-1 
        }else{
            newslidenumber = slidenumber === 5 ? 0 : slidenumber+1
        }

        setslidenumber(newslidenumber)
    }

    return(
        <div>
            <Navbar />
            <Header type="list"/>
            <div className='hotelcontainer'>
                {open && <div className='slider'>
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setopen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handlemove("l")} />
                    <div className='slidewrapper'>
                        <img src={photos[slidenumber].src} alt='' className='sliderimg'/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handlemove("r")}/>
                </div>}
               <div className='hotelwrapper'>
                <button className='booknow'>Reserve or Book Now!</button>
                <h1 className='hoteltitle'>Rajeshwari Kalyana Mandapam</h1>
                <div className='hotelAddress'>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span className='hoteldistance'>
                        Excellent location - 2KM from railway
                    </span><br></br>
                    <span className='hotelpricehighlight'>
                        Book a Wedding Hall from $350
                    </span>
                    <div className='hotelimages'>
                        {photos.map((photo,i) => (
                            <div className='hotelimgwrapper'>
                              <img onClick={()=>handleopen(i)}  
                              src={photo.src} 
                              alt='' 
                              className='hotelimg'/>  
                            </div>
                        ))}
                    </div>
                    <div className='hoteldetails'>
                          <div className='hoteldetailstexts'>
                            <h1 className='hoteltitle'>Our business is making memories.</h1>
                            <p className='hoteldesc'>
                            Chennai Convention Centre is one of the 
                            preferred wedding halls in chennai. Established
                             in 2015, the marriage hall retains its 
                             brand-new look which adds charm, elegance and
                              sophistication to any event hosted here. 
                              The convention centre began with a singular 
                              objective – to rank in the top marriage 
                              halls in Chennai. In three short years, 
                              the goal was achieved and surpassed. 
                              Today, we cater to every kind of social 
                              gathering.
                            </p>
                          </div>
                          <div className='hoteldetailsprice'>
                            <h1>Perfect for a 1-Day Event!</h1>
                            <span>
                                Located in the real heart of Chennai,this property has and
                                excellent location sccore of 9.4!
                            </span>
                            <h2>
                                <b>$450</b>(1 Day)
                            </h2>
                            <button>Reserve or book now</button>
                            </div>   
                    </div>
                </div>
                </div> 
                <Maillist />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel