import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import "./style.css"
function Detail() {
    const param = useParams();
    const [item, setItem] = useState({});
    const id = param.id;
    useEffect(() => {
        fetch(`https://67dbc0661fd9e43fe475b8b8.mockapi.io/prouduct/${id}`)
            .then(data => data.json())
            .then(data => {
                setItem(data)
            })
    }, [])


    return (
        <>
            <Header></Header>
            <div className="product">

                    <div className="img"><img src={item.image} alt="" /></div>
                    <div className="box">
                        <div className="title">{item.name}</div>
                        <div className="price">{item.price}$</div>
                        <div className="desc">
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>



            </div>
            <Footer></Footer>
        </>
    )
}

export default Detail;