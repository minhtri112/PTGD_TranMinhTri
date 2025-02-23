import {useState} from 'react';
function Bai_2(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [result,setResult] = useState(0);

    const clickHandel = ()=>{
        setResult(parseInt(a) + parseInt(b));
    }

    const changeHandelA = (e)=>{
        setA(e.target.value);
    }
    const changeHandelB = (e)=>{
        setB(e.target.value);
    }

    return (
        <>
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <input onChange={changeHandelA}  type='text' placeholder='Nhập a'></input>
            <br/>
            <input onChange={changeHandelB} type='text' placeholder='Nhập b'></input>
            <br/>
            <button onClick = {clickHandel}>Cal</button>
            <br/>
            <span>{result}</span>

        </div>
        </>
    )
}

export default Bai_2;