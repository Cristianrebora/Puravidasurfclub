import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return(
        <div className="card w-25">
        <div className="card-body p-0 text-center">
            <img src={product.imageUrl} classNamealt="card-img-top w-100" alt="" />
            <h4>{product.name}</h4>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock} </p>
        </div>
        <div className="card-footer">

            <link to={"./detail/${product.id} "} className="btn btn-outLine-dark w-100">Detalle </link>

        </div>

    </div>
    )
}
