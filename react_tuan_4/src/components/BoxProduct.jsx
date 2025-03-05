import avatar from "../assets/avatar.png"
import "./BoxProduct.css"
function BoxProducts() {
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

                </div>
            </div>
        </>
    )
}

export default BoxProducts;