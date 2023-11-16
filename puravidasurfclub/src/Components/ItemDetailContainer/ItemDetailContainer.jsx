import { useEffect, useState } from "react";
import { ItemDetail } from "./itemDetail/itemDetail";
import { mFetch } from "../helpers/mFetch";

export const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const { pid } = useParams()
    
    
    useEffect(() => {
        mFetch(pid)
        .then(res => setProduct(res))
        .catch(err => console.log("error" , err))
    }, [])
    
    return (
        <ItemDetail {...product} />
    )
}