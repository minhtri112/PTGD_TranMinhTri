import { Route,Routes } from "react-router-dom"
import DashBoard from "./pages/DashBoard";
import Project from "./pages/Project";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integration from "./pages/Integration";
function App() {
 
  return (
    <>
      <Routes>
        <Route path = "/" element={<DashBoard/>}></Route>
        <Route path = "/project" element={<Project/>}></Route>
        <Route path = "/teams" element={<Teams/>}></Route>
        <Route path = "/analytics" element={<Analytics/>}></Route>
        <Route path = "/messages" element={<Messages/>}></Route>
        <Route path = "/integrations" element={<Integration/>}></Route>
      </Routes>
    </>
  )
}

export default App
