
import {useEffect, useState } from "react"
import { Link, useParams }  from "react-router-dom"
import { categoriasFetch } from "../../helpers/categoriasFetch.js"
import { ItemList } from "../itemLlist/ItemList.jsx"
    


export const NavBarContainer = ({ greeting }) => {
    const [ productos, setProductos ] =useState([])
    const { categoria } =useParams()

    useEffect(()=>{
        
        
        if (categoria) {
            categoriasFetch()
            .then( result => setProductos( result.filter (product => product.category === categoria)))
            .catch(err => console.log (err))
        } else {
            categoriasFetch()
            .then( result => setProductos(result))
            .catch(err => console.log(err))
        }
        
    }, [categoria])
    return (
        <div>
            <h2 className="text-center" >{ greeting }</h2>
            <ItemList productos={productos} />


     </div>
    )
}