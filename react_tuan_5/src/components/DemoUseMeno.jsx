import { useMemo, useState } from "react";
import ResultUseMemo from "./RusultUseMeno";

function DemoUseMeno(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);





    const handelSetA = (e)=>{
        setA(parseInt(e.target.value));
        
    }

    const handelSetB = (e)=>{
        setB(parseInt(e.target.value));
    }





    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input type='text' placeholder='Nhập a' style={{ marginBottom: '5px' }} onChange={handelSetA}></input>
                <br />
                <input  type='text' placeholder='Nhập b' onChange={handelSetB} style={{ marginBottom: '5px' }}></input>
                <br />
                <ResultUseMemo a = {a} b = {b}/>

            </div>
        </>
    )
}


export default DemoUseMeno;