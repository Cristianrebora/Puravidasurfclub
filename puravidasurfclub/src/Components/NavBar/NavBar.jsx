import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav clasName="navbar navbar-expand-lg bg-body-tertiary">
            <div clasName="container-fluid">
                <a clasName="navbar-brand" href="#">Pura Vida Surf Club</a>
                <button clasName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span clasName="navbar-toggler-icon"></span>
                </button>
                <div clasName="collapse navbar-collapse" id="navbarScroll">
                    <ul clasName="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li clasName="nav-item">
                            <a clasName="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li clasName="nav-item">
                            <a clasName="nav-link" href="#">Nosotros</a>
                        </li>
                        <li clasName="nav-item dropdown">
                            <a clasName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Clases
                            </a>
                            <ul clasName="dropdown-menu">
                                <li><a clasName="dropdown-item" href="#">Turnos</a></li>
                                <li><a clasName="dropdown-item" href="#">Precios</a></li>
                                <li><hr clasName="dropdown-divider" />Alquiler</li>
                                <li><a clasName="dropdown-item" href="#">Profesores</a></li>
                            </ul>
                        </li>
                        <li clasName="nav-item">
                            <a clasName="nav-link disabled" aria-disabled="true">Productos</a>
                        </li>
                    </ul>
                    <form clasName="d-flex" role="search">
                        <input clasName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button clasName="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
        
        )
}
