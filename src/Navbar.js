
import "./navbar.css"

const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>HallBooking</span>
                <div className='navItem'>
                    <button className='navbutton'>Register</button>
                    <button className='navbutton'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar