import { useState, useEffect } from "react";
import dl from "../data/bookTable";
import "./style.css";

function BookTableCp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dl);
    }, [dl]);

    const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handelAdd = (item) => {
        const index = dl.findIndex(x => x.id === item.id);
        dl[index].quantity += 1;
        const newDl = [...dl];
        setData(newDl);
    }

    const handelSub = (item) => {
        const index = dl.findIndex(x => x.id === item.id);
        if(dl[index].quantity > 1){
            dl[index].quantity -= 1;
            const newDl = [...dl];
            setData(newDl);
        }
        else{
            dl.splice(index, 1);
            const newDl = [...dl];
            setData(newDl);
        }
    }


    return (
        <>
            <div className="tableBook">
                <h2>Danh sách món được đặt</h2>
                <div className="listBook">
                    {
                        data.map(item => (
                            <div className="itemBook" key={item.id}>
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="name">
                                    <h4>{item.name}</h4>

                                </div>
                                <div className="price">
                                    <p>{item.price}$</p>
                                </div>
                                <div className="quanlity">
                                    <button onClick={() => handelSub(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handelAdd(item)}>+</button>
                                </div>
                                <div className="totalItem">
                                    <p>{item.price * item.quantity}$</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="total">
                    <span>Tổng tiền {total}$</span>
                </div>
            </div>
        </>
    );
}

export default BookTableCp;