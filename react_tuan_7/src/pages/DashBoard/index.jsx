import Menu from "../../components/Menu"
import notice from "../../image/Bell 1.png"
import question from "../../image/Question 1.png"
import avarta from "../../image/Avatar 313.png"
import "./style.css"
import item_1 from "../../image/Squares four 1.png"
import item_2 from "../../image/File text 1.png"
import { IoIosSearch } from "react-icons/io";

import cart from "../../image/Button 1509.png"
import dola from "../../image/Button 1529.png"
import user from "../../image/Button 1530.png"
import { FaCaretUp } from "react-icons/fa";

import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import export_file from "../../image/Move up.png"
import download from "../../image/Download.png";

import { useEffect, useState } from "react";

import ItemOrder from "../../components/ItemOrder";
import { useNavigate, useSearchParams } from "react-router-dom"

import Model from "../../components/ModelCreate"

function DashBoard() {
    const [data_tunrover, setTunrover] = useState({});
    const [data_profit, setProfit] = useState({});
    const [data_newCustomer, setNewCustomer] = useState({});
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();


    const [data_orderPagination, setOrderPagination] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(0);


    useEffect(() => {
        fetch('http://localhost:3002/tunrover')
            .then(response => response.json())
            .then(data => {
                setTunrover(data);
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:3002/profit')
            .then(response => response.json())
            .then(data => {
                setProfit(data);
            })
    }, []);


    useEffect(() => {
        fetch('http://localhost:3002/newCustomer')
            .then(response => response.json())
            .then(data => {
                setNewCustomer(data);
            })
    }, []);
    


    useEffect(() => {
        const page = parseInt(searchParams.get("_page") || 1);
        setPageNumber(page);
    
        fetch(`http://localhost:3002/orders?_sort=-id&_page=${page}&_per_page=3`)
            .then(response => response.json())
            .then(data => {
                setOrderPagination(data.data);
                console.log(data.data);
            });
    }, [searchParams]);
    

    

    useEffect(() => {
        fetch('http://localhost:3002/orders')
            .then(response => response.json())
            .then(data => {
                let pageCount = Math.ceil(data.length / 3);
                setPageCount(pageCount);
            })
    }, []);


    const onClickPagition = (e) => {
        const page = e.target.innerText;
        navigate(`?_page=${page}`);
    }

    const onClickBeforePage = () => {
        if (pageNumber > 1) {
            navigate(`?_page=${pageNumber - 1}`);
        }
    }
    
    const onClickAfterPage = () => {
        if (pageNumber < pageCount) {
            navigate(`?_page=${pageNumber + 1}`);
        }
    }




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
                                    <h2 >$ {data_tunrover.metric}</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> {data_tunrover.poc} %
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
                                    <h2>$ {data_profit.metric}</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> {data_profit.poc} %
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
                                    <h2>{data_newCustomer.metric}</h2>
                                    <p className="flex items-center">
                                        <span className="flex items-center mr-1">
                                            <FaCaretUp className="mr-1" /> {data_newCustomer.poc} %
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


                                <Model></Model>

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
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>CUSTOMER NAME</th>
                                        <th>COMPANY</th>
                                        <th>ORDER VALUE</th>
                                        <th>ORDER DATE</th>
                                        <th>STATUS</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_orderPagination.map((item, index) => {
                                            return (

                                                <ItemOrder item={item} key={index}></ItemOrder>

                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>


                        <div className="footer-overview flex justify-between items-center">
                            <div>
                                <h2>63 result</h2>
                            </div>

                            <div className="pagination flex items-center">
                                <button onClick={onClickBeforePage}><MdOutlineNavigateBefore /></button>
                                {
                                    [...Array(pageCount)].map((_, index) => {
                                        return (
                                            <button className={index + 1 == pageNumber ? 'active' : ''} key={index + 1} onClick={onClickPagition}>{index + 1}</button>
                                        )
                                    })
                                }
                                <button onClick={onClickAfterPage}><MdOutlineNavigateNext /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}

export default DashBoard