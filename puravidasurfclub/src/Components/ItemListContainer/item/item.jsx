import {Link} from "react-router-dom"

export const Item = ({ product }) => {
    return(
        <div className="card w-25">
        <div className="card-body p-0 text-center">
            <img style={{height: 250, width: 250}} src={product.imageUrl} classNamealt="card-img-top w-100" alt="" />
            <h4>{product.name}</h4>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock} </p>
        </div>
        <div className="card-footer">

            <Link  to={"/detalle/${product.id}"} className="btn btn-outline-dark w-100">detalle</Link>

        </div>

    </div>
    )
}
