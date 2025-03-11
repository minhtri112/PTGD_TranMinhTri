import "./ProductItem.css"

function ProductItem({item}){
    return (
        <>
            <div className="product-item">
                <div className="img">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="content">
                <p className="title">{item.name}</p>
                <img className="icon" src="https://res.cloudinary.com/dry3w55lc/image/upload/v1741177136/Icon_Button_73_kqairc.png" alt="" />
                </div>
                <div className="quantity">
                    <span>{item.quantity}</span>
                </div>
            </div>
        </>
    )
}

export default ProductItem;