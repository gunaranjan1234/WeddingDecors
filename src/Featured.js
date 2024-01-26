import "./featured.css"

const Featured =() =>{
    return(
        <div className="featured">
            <div className="featureditem">
                <img src='https://static.vecteezy.com/system/resources/thumbnails/007/417/237/small/outdoor-tourism-landscape-luxurious-beach-resort-with-swimming-pool-and-beach-chairs-or-loungers-under-umbrellas-with-palm-trees-and-blue-sky-summer-travel-and-vacation-background-concept-photo.jpg'
                 ait="" 
                 className="featuredimg"/>
                 <div className="featuredtitle">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                 </div>
            </div>


            <div className="featureditem">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWwxsH69HgkZeZlepWFWDWHTQsZzNuZJe5g&usqp=CAU'
                 ait="" 
                 className="featuredimg"/>
                 <div className="featuredtitle">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                 </div>
            </div>


            <div className="featureditem">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Vxb5X3JgrNwioU86G-j_YtGLMj2AS8yKxg&usqp=CAU'
                 ait="" 
                 className="featuredimg"/>
                 <div className="featuredtitle">
                    <h1>Aust</h1>
                    <h2>502 properties</h2>
                 </div>
            </div>



        </div>
    )
}

export default Featured