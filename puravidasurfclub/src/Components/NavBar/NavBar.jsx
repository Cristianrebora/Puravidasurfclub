import { CartWidget } from "../CartWidget/CartWidget";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


 
export default function NavBar  ()  {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pura Vida Surf Club</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/navBar/:Remeras">Remeras</Link></li>
                                <li><Link to="/navBar/:Gorras">Gorras</Link></li>
                                <li><Link to="/navBar/:Jeans">Jeans</Link></li>
                                <li><Link to="/navBar/:Bermudas">Bermudas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Clases</a>
                        </li>
                    </ul>
                        <ul>
                            <li>
                                <a className="Cartwidgeticons" href="#">
                                    <CartWidget />
                                </a>
                            </li>
                        </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                     </form>
                     
                </div>
            </div>
        </nav >
    
        
     
        )
}

