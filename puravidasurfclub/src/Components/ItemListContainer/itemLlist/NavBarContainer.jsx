
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { categoriasFetch } from "../../helpers/categoriasFetch.js"
import { ItemList } from "../itemLlist/ItemList.jsx"

export const NavBarContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
       
        setProductos(categoriasFetch.filter(product => product.category === categoria))

    }, [categoria])
    return (
        <div>
            <h2 className="text-center" >{greeting}</h2>
            <ItemList productos={productos} />


        </div>
    )
}