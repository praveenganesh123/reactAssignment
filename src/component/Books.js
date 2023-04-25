function Books(props) {

    return(
        <div className="card">
            <div className="card-header">
                <img className="book-img"  src={props.img} alt="" />
               
                <h2 className="title">{props.title} </h2>
                <p className="author">~ {props.author}  </p>
                <p className="rating"> {props.rating} ⭐  </p>
            
            </div>
            
        
            
            
        </div>

    )

}

export default Books;