import './featuredproperti.css'

const Featuredproperti =() =>{
    return(
        <div className='fp'>
            <div className='fpitem'>
           <img 
             src='https://i0.wp.com/suessmoments.com/wp-content/uploads/sites/10014/2023/02/website-shadowbrook-nj-wedding-photos-7153-photography-by-SUESS-MOMENTS.jpg?fit=2560%2C1703&ssl=1'
             alt=''
             className='fpimg'
           /> 
           <span className='fpname'>Selva wedding Hall</span>
           <span className='fpcity'>Coimbatore</span>
           <span className='fpprice'>Stating from $350</span>
           <div className='fprating'>
            <button>7.9</button>
            <span>Good</span>
           </div>
           </div>

           <div className='fpitem'>
           <img 
             src='https://cdn0.weddingwire.com/article/3191/3_2/1280/jpg/11913-1-hero-all-about-events-wedding-arch.jpeg'
             alt=''
             className='fpimg'
           /> 
           <span className='fpname'>Pradeesh Backyard wedding</span>
           <span className='fpcity'>salem</span>
           <span className='fpprice'>Stating from $370</span>
           <div className='fprating'>
            <button>7.7</button>
            <span>Good</span>
           </div>
           </div>

           <div className='fpitem'>
           <img 
             src='https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg'
             alt=''
             className='fpimg'
           /> 
           <span className='fpname'>Gugan Beach wedding </span>
           <span className='fpcity'>chennai</span>
           <span className='fpprice'>Stating from $450</span>
           <div className='fprating'>
            <button>8.9</button>
            <span>Good</span>
           </div>
           </div>

           <div className='fpitem'>
           <img 
             src='https://cdn0.weddingwire.com/vendor/197676/3_2/1280/jpeg/axz-1942_51_676791.jpeg'
             alt=''
             className='fpimg'
           /> 
           <span className='fpname'>Thiru Boat wedding</span>
           <span className='fpcity'>chennai</span>
           <span className='fpprice'>Stating from $470</span>
           <div className='fprating'>
            <button>8.2</button>
            <span>Good</span>
           </div>
           </div>

        </div>
    )
}

export default Featuredproperti