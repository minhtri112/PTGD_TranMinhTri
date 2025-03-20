import { useState ,useEffect} from "react";
import "./style.css"
import ProductItem from "./ProductItem";
function MenuList(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://67dbc0661fd9e43fe475b8b8.mockapi.io/prouduct")
        .then(data => data.json())
        .then(data => {
            setData(data);
        })
    },[]);


    return (
        <>
        
        <div className="listProduct">
            {
                data.map((item) => 
                    <ProductItem item = {item} key = {item.id} ></ProductItem>
                )
            }
        </div>
        </>
    )
}

export default MenuList;