import Menu from "../../components/Menu"
import notice from "../../image/Bell 1.png"
import question from "../../image/Question 1.png"
import avarta from "../../image/Avatar 313.png"
import "./style.css"
import item_1 from "../../image/Squares four 1.png"
import item_2 from "../../image/File text 1.png"
import { IoIosSearch } from "react-icons/io";
import { SiAppian } from "react-icons/si"
import cart from "../../image/Button 1509.png"
import dola from "../../image/Button 1529.png"
import user from "../../image/Button 1530.png"
import { FaCaretUp } from "react-icons/fa";
import avarta1 from "../../image/Avatar (1).png"
import edit from "../../image/create.png"
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import export_file from "../../image/Move up.png"
import download from "../../image/Download.png";
import { IoIosAddCircle } from "react-icons/io";

function DashBoard() {
    return (
        <>
            <div className="dashboard flex">
                <Menu></Menu>
                <div className="main">

                    <div className="header-dashboard flex justify-between items-center">
                        <h2 className="text-[#F44B86] font-extrabold text-xl">Dashboard</h2>
                        <div className="flex ">
                            <div className="form-search flex items-center justify-center">
                                <IoIosSearch className="text-[22px] mr-1" />
                                <input type="text" placeholder="Search..." />
                            </div>
                            <img src={notice} className="notice" alt="" />
                            <img src={question} className="question" alt="" />
                            <img src={avarta} className="avatar" alt="" />

                        </div>
                    </div>

                    <div className="content-dashboard">

                        <div className="item flex">
                            <img src={item_1} alt="" className="mr-2" />
                            <h4 className=" font-bold text-lg">Overview</h4>
                        </div>

                        <div className="overview flex  justify-around items-center">
                            <div className="item flex justify-between bg-[#FFF0F5]">
                                <div className="content-item">
                                    <h4 >Turnover</h4>
                                    <h2 >$ 92.403</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> 5.39 %
                                        </span>
                                        period of change
                                    </p>
                                </div>
                                <div className="icon-img">
                                    <img src={cart} alt="" />
                                </div>
                            </div>

                            <div className="item flex justify-between bg-[#EEF5FE]" >
                                <div className="content-item">
                                    <h4>Profit</h4>
                                    <h2>$ 92.403</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> 5.39 %
                                        </span>
                                        period of change
                                    </p>
                                </div>
                                <div className="icon-img">
                                    <img src={dola} alt="" />
                                </div>
                            </div>


                            <div className="item flex justify-between bg-[#F0F7FD]">
                                <div className="content-item">
                                    <h4>New Customer</h4>
                                    <h2>$ 92.403</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> 5.39 %
                                        </span>
                                        period of change
                                    </p>
                                </div>
                                <div className="icon-img">
                                    <img src={user} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="item flex">
                            <img src={item_2} alt="" className="mr-2" />
                            <h4 className=" font-bold text-lg">Detail report</h4>
                        </div>

                        <div className="table">
                            <div className="button-action">
                                <button className="">
                                  <IoIosAddCircle className="mr-1 text-[20px]"/>
                                    Add
                                </button>
                                <button className="">
                                    <img src={download} alt="" />
                                    Import file
                                </button>
                                <button className="">
                                    <img src={export_file} alt="" />
                                    Export file
                                </button>
                            </div>
                            <table className="table-auto">
                                <thead>
                                    <th><input type="checkbox" /></th>
                                    <th>CUSTOMER NAME</th>
                                    <th>COMPANY</th>
                                    <th>ORDER VALUE</th>
                                    <th>ORDER DATE</th>
                                    <th>STATUS</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <img src={avarta1} alt="" />
                                                <h2>Elizabeth Lee</h2>
                                            </div>
                                        </td>
                                        <td>AvatartSystems</td>
                                        <td>$350</td>
                                        <td>12/12/2024</td>
                                        <td>
                                            <button>new</button>
                                        </td>
                                        <td>
                                            <button>
                                                <img src={edit} alt="" />
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>


                        <div className="footer-overview flex justify-between items-center">
                            <div>
                                <h2>63 result</h2>
                            </div>

                            <div className="pagination flex items-center">
                                <button><MdOutlineNavigateBefore /></button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button><MdOutlineNavigateNext /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}

export default DashBoard