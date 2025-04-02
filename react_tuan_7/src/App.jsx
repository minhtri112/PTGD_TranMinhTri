import { Route,Routes } from "react-router-dom"
import DashBoard from "./pages/DashBoard";
function App() {
 
  return (
    <>
      <Routes>
        <Route path = "/" element={<DashBoard/>}></Route>
      </Routes>
    </>
  )
}

export default App
