import edit from "../image/create.png"
function ItemOrder(props) {
    
    const { item } = props;
    console.log(item);
    return (
        <>
            <tr>
                <td><input type="checkbox" /></td>
                <td>
                    <div className="flex items-center">
                        <img src={item.image} alt="" />
                        <h2>{item.customerName}</h2>
                    </div>
                </td>
                <td>{item.conpanyName}</td>
                <td>${item.orderValue}</td>
                <td>{item.orderData}</td>
                <td>
                    <button>{item.status}</button>
                </td>
                <td>
                    <button>
                        <img src={edit} alt="" />
                    </button>
                </td>
            </tr>
        </>
    );
}

export default ItemOrder;