import "./bai_2.css"
import { useState } from "react"
function Bai_2() {
    const [money, setMoney] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);
    const [data, setData] = useState([]);

    const handelMoney = (e) => {
        setMoney(e.target.value);
    }

    const handelRate = (e) => {
        setRate(e.target.value);
    }

    const handelGoal = (e) => {
        setGoal(e.target.value);
    }


    const hendelClick = () => {
        let money_1 = parseInt(money);
        let rate_1 = parseInt(rate);
        let goal_1 = parseInt(goal);
        let year = new Date().getFullYear();
        let endYear = money_1;
        const newData = [];
        while (goal_1 > endYear) {
            console.log(year,money_1, rate_1, goal_1, endYear);
            endYear = money_1 + (money_1 * rate_1 / 100);
            const obj = {
                year: year,
                money: money_1,
                rate: rate_1,
                endYear: endYear
            }
            newData.push(obj);
            money_1 = endYear;
            year++;
        }
        setData(newData);
        console.log(newData);
    }
    return (
        <>
            <div className="container">
                <div className="box">
                    <label htmlFor="">Input your invest money</label>
                    <input type="text" onChange={handelMoney} />
                </div>
                <div className="box">
                    <label htmlFor="">Input rate</label>
                    <input type="text" onChange={handelRate} />
                </div >
                <div className="box">
                    <label htmlFor="">Input your goal</label>
                    <input type="text" onChange={handelGoal} />
                </div>

                <div className="box-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Rate</th>
                                <th>Money</th>
                                <th>End Year</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.year}</td>
                                    <td>{item.money}</td>
                                    <td>{item.rate}</td>
                                    <td>{item.endYear}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button onClick={hendelClick}>CLICK</button>

            </div>
        </>
    )
}


export default Bai_2