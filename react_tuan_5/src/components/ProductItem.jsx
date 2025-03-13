import "./ProductItem.css"

function ProductItem({ item }) {
    return (
        <>
            <div className="border-2 w-[23%] mt-2.5 rounded-md flex flex-col">
                <div className="img">
                    <img className="aspect-4/3 w-full" src={item.image} alt={item.name} />
                </div>

                {/* Đảm bảo flex-1 có thể mở rộng */}
                <div className="flex flex-col p-3 flex-1">
                    <div className="flex py-1.5 justify-between">
                        <p className="font-black text-[20px] flex-1">{item.name}</p>
                        <img className="icon w-[40px] h-[40px]"
                            src="https://res.cloudinary.com/dry3w55lc/image/upload/v1741177136/Icon_Button_73_kqairc.png"
                            alt="" />
                    </div>

                    {/* Thẻ này đang có kích thước nhỏ, nên flex không cần thiết */}
                    <div className="py-1 px-7 bg-pink-400 w-[50px] rounded-[5px] flex justify-center items-center">
                        <span className="text-white font-bold">{item.quantity}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;