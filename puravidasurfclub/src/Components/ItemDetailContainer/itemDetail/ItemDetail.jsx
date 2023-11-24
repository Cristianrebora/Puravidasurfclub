import { ItemCounter } from "../../ItemCounter/ItemCounter"

export const ItemDetail = ({ imageUrl, name, description, price, stock }) => {
    
        const onAdd = (cantidad) => {
            console.log(`la cantidad seleccionada es: ${cantidad} `)
        }

        return(
        <div className="row">
            <div className="col-12 text-center nt-5">
            <h1>Detalle del producto</h1>
        </div>
        <div className="col-6 text-center nt.5">
            <img src={imageUrl} alt= {name} className="img-fluid" />
            <h2> {name} </h2>
        </div>
        <div className="col-6 nt-5">
            <h4>Description: {description}</h4>
            <h4>Precio: {price} </h4>
            <h4>Stock: {stock} </h4>
            <ItemCounter onAdd={onAdd} inital={1} stock={10} />
        </div>
        </div>
    )
}