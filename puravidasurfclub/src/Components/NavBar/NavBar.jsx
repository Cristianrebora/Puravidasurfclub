import { CartWidget, CartWidget } from "../CartWidget/CartWidget"

export const NavBar= () => {
    return (
        <div>
            <h3>Pura Vida Surf Club</h3>
            <ul>
                <li>
                    <p>Tablas</p>
                    </li>
                    <li>
                    <p>Trajes</p>
                    </li>
                    <li>                 
                    <p>Turnos</p>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}