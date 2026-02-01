export function ProductCard(props){

    return(
        <div>
        <h1 w>{props.name}</h1>
        <img src = {props.image}/><br/>
        <span>{props.price}</span>
      </div>
    )
}