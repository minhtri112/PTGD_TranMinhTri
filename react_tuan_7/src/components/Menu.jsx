import logo from "../image/Image 1858.png";
import group from "../image/Group.png"
import {Link,NavLink} from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { RiTeamFill } from "react-icons/ri";
import { FaFolder } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { RiMessageFill } from "react-icons/ri";
import { BsChevronBarRight } from "react-icons/bs";
import "./style.css"
function Menu(){
    return (
        <>
        <div className="menu">
            <div className="inner-logo">
                <img src={logo} alt="" />
            </div>

            <div className="subMenu">
                <ul>
                    <li>
                     <NavLink className=""  to='/'>
                      <MdDashboard />
                       <span>DashBoard</span>
                     </NavLink>
                    </li>
                    <li>
                     <NavLink className="" to='/project'>
                     <FaFolder />
                       <span>Project</span>
                     </NavLink>
                    </li>

                    <li>
                     <NavLink className="" to='/teams'>
                     <RiTeamFill />
                       <span>Teams</span>
                     </NavLink>
                    </li>
                    <li>
                     <NavLink className="" to='/analytics'>
                     <SiSimpleanalytics />
                       <span>Analytics</span>
                     </NavLink>
                    </li>
                    <li>
                     <NavLink className="" to='/messages'>
                     <RiMessageFill />
                       <span>Messages</span>
                     </NavLink>
                    </li>
                    <li>
                     <NavLink className="" to='/integrations'>
                     <BsChevronBarRight />
                       <span>Integrations</span>
                     </NavLink>
                    </li>
                </ul>
            </div>

            <div className="image">
                <img  className="mt-6" src={group} alt="" />
            </div>
        </div>
        </>
    )
}

export default Menu;