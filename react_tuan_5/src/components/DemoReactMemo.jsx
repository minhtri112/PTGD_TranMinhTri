import { useState } from "react";
import ChildComponent from "./ChildComponent";
function DemoReactMemo(){
    const [count,setCount] = useState(0);
    const [text,setText] = useState('');

    return (
        <>
         <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>React.memo Demo</h1>
            <ChildComponent count={count} />
            <button onClick={() => setCount(count + 1)}>Tăng Count</button>
            <br />
            <input style={{ marginTop: "10px" }}
                type="text"
                placeholder="Nhập text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        </>
    )
}

export default DemoReactMemo;