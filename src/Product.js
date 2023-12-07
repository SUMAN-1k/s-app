function Product(props)
{


   
    return(
        <div className="pro"> 
        <img className="hi" alt="" src={props.url}></img>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        
        </div>
        

    )
}
export default Product;