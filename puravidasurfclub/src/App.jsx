
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


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
