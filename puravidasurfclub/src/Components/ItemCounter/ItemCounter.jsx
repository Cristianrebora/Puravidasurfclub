import { useCounter } from "../../Components/hooks/useCouter"

export const ItemCounter = ({inital=1, stock=5, onAdd}) =>{
    const { counter, handlerestar, handlesumar } = useCounter(inital,stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div className="w-25">
            <label>{counter}</label>
            <button onClick= {handlesumar}> + </button>
            <button onClick= {handlerestar}> - </button>
            <button onClick= {handleOnAdd}> Agregar al Carrito</button>
        </div>
    )
}