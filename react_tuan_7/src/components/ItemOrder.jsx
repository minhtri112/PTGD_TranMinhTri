import AppEdit from "../components/ModelEdit";
function ItemOrder(props) {
    
    const { item } = props;
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
                   <AppEdit item = {item}></AppEdit>
                </td>
            </tr>
        </>
    );
}

export default ItemOrder;