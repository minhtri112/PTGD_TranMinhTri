
import "./BoxProduct.css"
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
function BoxProducts() {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("https://67c83e5d0acf98d070859485.mockapi.io/api/product/products")
        .then(res => res.json())
        .then(
            data => {
                setData(data);
            }
        )
    },[])

    console.log(data);

    return (
        <>
            <div className="py-20 px-100 ">
                <div className="box-recipe">
                    <h2 className="font-bold text-[30px] mb-[20px]">Emma Conzalez's Recipe Box</h2>
                    <div className="flex justify-center items-center">
                        <div className="mr-[40px]">
                            <img className="w-100" src="https://res.cloudinary.com/dry3w55lc/image/upload/v1741177135/avatar_cw1cqt.png" alt="" />
                        </div>
                        <div className="text-desc">
                            <p class = "mb-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, harum. Quae facilis eum commodi, cumque rem soluta sit incidunt perferendis nemo pariatur 
                                inventore blanditiis atque saepe voluptatibus, ad, quam quia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, harum. Quae facilis eum commodi, cumque rem soluta sit incidunt perferendis nemo pariatur inventore blanditiis atque saepe voluptatibus, ad, quam quia.</p>
                            <div className="sub">
                                <a className = "text-pink-500" href="">6.5k Subcsribes</a>
                                <button className="bg-pink-500 ml-10 py-2 px-6 font-[700] text-[#fff] rounded-[8px]" >
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[40px] tabBar">
                    <button className="text-[#fff] bg-pink-500">Saved Recipe</button>
                    <button>Folders</button>
                    <button>Recipes by Genevew</button>
                </div>

                <div className="listProduct  flex flex-wrap quantity justify-between mt-1.5">
                    {
                        data.map(item => {
                            return <ProductItem item = {item}  key = {item.id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BoxProducts;