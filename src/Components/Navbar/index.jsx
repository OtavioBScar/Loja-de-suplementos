import { Link, useNavigate } from "react-router-dom"
import "./style.css"

export const Navbar = () => {

    const Navigate = useNavigate()

    return(
        <div className="navbar-container">
            <button onClick={() => Navigate("/")}>Home</button>
            <button onClick={() => Navigate("/products")}>Produtos</button>
        </div>
    )
}