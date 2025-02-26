import image from "../assets/image1.png"
import image1 from "../assets/nothing.png"
import "../components/main.css"
function Main(){
    return (
        <>
          <div className="main">
            <div className="inner-left">
                <img src= {image} alt="" />
            </div>
            <div className="inner-right">
                <h2 className="inner-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <img src={image1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <div className="buttonClass">
                    <button>Sweet cake</button>
                    <button>Back cake</button>
                    <button>Sweet cake</button>
                    <button>Back cake</button>
                </div>
            </div>
          </div>
        </>
    )
}

export default Main;