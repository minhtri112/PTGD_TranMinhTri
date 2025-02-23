import {useState} from 'react';
function Bai_1(){
    const [a,setA] = useState('');
    const onChangeHandel  = () =>{
        setA('Hello World');
    }
    return (
        <>
        <div style={{textAlign:'center', marginBottom:'20px'}}>
        <button onClick={onChangeHandel}>click</button>
            <br/>
            <span>{a}</span>
        </div>
        </>
    )
}

export default Bai_1;