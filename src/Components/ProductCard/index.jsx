import "./style.css"
// import Creatina from "../../images/Creatina.jpg"

export const ProductCard = ({name, value}) => {
    let fixName = name.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '',).replace(" ", "_")
    let path = `./src/images/${fixName}.jpg`

    return(
        <div className="product-container">
            <h1>Card</h1>
            <img src={path} alt={name}/>
            <h3>{name}</h3>
            <h2>R${value}</h2>
        </div>
    )
}