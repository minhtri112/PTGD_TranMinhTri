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
                    {
                        
                    }
                    <button className={`bg-blue-100 text-blue-500 text-sm px-3 py-1 rounded-full font-medium ${item.status == 'Completed' ? 'bg-green-100 text-green-500' : ''} ${item.status == 'Processing' ? 'bg-pink-100 text-pink-500' : ''}`}>{item.status}</button>
                </td>
                <td>
                   <AppEdit item = {item}></AppEdit>
                </td>
            </tr>
        </>
    );
}

export default ItemOrder;