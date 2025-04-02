import logo from "../image/Image 1858.png";
import group from "../image/Group.png"
import {Link} from "react-router-dom";
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
                     <Link className="">
                      <MdDashboard />
                       <span>DashBoard</span>
                     </Link>
                    </li>
                    <li>
                     <Link className="">
                     <FaFolder />
                       <span>Project</span>
                     </Link>
                    </li>

                    <li>
                     <Link className="">
                     <RiTeamFill />
                       <span>Teams</span>
                     </Link>
                    </li>
                    <li>
                     <Link className="">
                     <SiSimpleanalytics />
                       <span>Analytics</span>
                     </Link>
                    </li>
                    <li>
                     <Link className="">
                     <RiMessageFill />
                       <span>Messages</span>
                     </Link>
                    </li>
                    <li>
                     <Link className="">
                     <BsChevronBarRight />
                       <span>Integrations</span>
                     </Link>
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