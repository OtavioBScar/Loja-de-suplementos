import { ProductCard } from "../../Components/ProductCard"
import "./style.css"

export const Products = () => {

    const data = [
        { id: 1, nome: "Creatina", valor: 85.99},
        { id: 2, nome: "Whey Protein", valor: 99.99},
        { id: 3, nome: "Horus Pré-treino", valor: 145.99},
    ]

    return (
        <div className="div-container">
            {data.map((i) => {
                return (
                    <ProductCard name={i.nome} value={i.valor} />
                )
            })}
        </div>
    )
}