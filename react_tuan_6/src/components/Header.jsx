import "./style.css"
import {Link} from "react-router-dom"
function Header(){
    return (
        <>
           <div className="header">
            <Link to = '/'>Home</Link>
            <Link to = '/menu'>Menu</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/booktable'>Book Table</Link>
           </div>
        </>
    )
}

export default Header;