
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
            <div className="container">
                <div className="box-recipe">
                    <h2>Emma Conzalez's Recipe Box</h2>
                    <div className="box-content">
                        <div className="avatar">
                            <img src="https://res.cloudinary.com/dry3w55lc/image/upload/v1741177135/avatar_cw1cqt.png" alt="" />
                        </div>
                        <div className="text-desc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, harum. Quae facilis eum commodi, cumque rem soluta sit incidunt perferendis nemo pariatur 
                                inventore blanditiis atque saepe voluptatibus, ad, quam quia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, harum. Quae facilis eum commodi, cumque rem soluta sit incidunt perferendis nemo pariatur inventore blanditiis atque saepe voluptatibus, ad, quam quia.</p>
                            <div className="sub">
                                <a href="">6.5k Subcsribes</a>
                                <button className="share">
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tabBar">
                    <button>Saved Recipe</button>
                    <button>Folders</button>
                    <button>Recipes by Genevew</button>
                </div>

                <div className="listProduct">
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