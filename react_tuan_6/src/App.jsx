import { Route,Routes } from "react-router-dom"
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Menu from "../src/pages/Menu";
import BookTable from "./pages/BookTable";
import Detail from "./pages/Detail";
function App() {
  return (
    <Routes>
      <Route path="/" element = { <Home/>} />
      <Route path="/contact" element = { <Contact/>} />
      <Route path="/menu" element = { <Menu/>} />
      <Route path="/booktable" element = { <BookTable/>} />
      <Route path="/detail/:id" element = { <Detail/>} />
    </Routes>
  )
}

export default App
