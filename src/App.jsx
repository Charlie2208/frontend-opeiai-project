import { useState } from "react";
import Header from "./components/Header"
import RoutineResults from "./components/RoutineResults"

function App() {

  const [listRoutines, setListRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header setListRoutines={setListRoutines} setIsLoading={setIsLoading} />
      <RoutineResults listRoutines={listRoutines} isLoading={isLoading}  />
    </div>
  )
}

export default App
