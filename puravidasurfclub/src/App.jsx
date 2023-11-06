import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"
import "boostrap/dist/css/boostrap.min.css"

function App (){

  return (
      <>
      <div className="container">
          <NavBar />
          <ItemListContainer greeting="saluda pura vida surf club" />
      </div>
      </>
  )

}

export default App
