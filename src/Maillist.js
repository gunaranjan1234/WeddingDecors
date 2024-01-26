import './maillist.css'

const Maillist =() =>{
    return(
        <div className='mail'>
            <h1 className='mailtitle'>Save time, save money!</h1>
            <span className='maildesc'>Sing up and we'll send the best deals to you</span>
            <div className='mailinputcontainer'>
                <input type='text' placeholder='Your Email'/>
                <button>Submit</button>

            </div>
        </div>
    )
}

export default Maillist