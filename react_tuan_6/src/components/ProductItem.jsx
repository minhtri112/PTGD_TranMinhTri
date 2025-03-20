import { useNavigate } from "react-router-dom";
import dl from "../data/bookTable";
function ProductItem(props) {

    const { item } = props;



    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/detail/' + item.id); 
    }

    const handelBook = () => {

        const index = dl.findIndex(x => x.id === item.id);

        if(index != -1){
            dl[index].quantity += 1;

        }
        else{
            dl.push({
                ...item,
                quantity: 1
            });
        }
    }




    return (
        <>

            <div className="item" >
                <div className="img">
                    <img src={item.image} />
                </div>
                <div className="title" onClick={handelClick}>
                    {item.name}
                </div>
                <div className="price">
                    {item.price}$
                </div>
                <div className="book">
                    <button onClick={handelBook}>Book</button>
                </div>
            </div>

        </>
    )
}

export default ProductItem;