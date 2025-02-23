import {useState} from 'react';
function Bai_3(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [result,setResult] = useState(0);
    const [operator,setOperator] = useState('');

    const clickHandel = ()=>{
        if(operator == '+'){
            setResult(parseInt(a) + parseInt(b));
        }
        else if(operator == '-'){
            setResult(parseInt(a) - parseInt(b));
        }
        else if(operator == '*'){
            setResult(parseInt(a) * parseInt(b));
        }
        else {
            setResult(parseInt(a) / parseInt(b));
        }
        
    }

    const changeHandelA = (e)=>{
        setA(e.target.value);
    }
    const changeHandelB = (e)=>{
        setB(e.target.value);
    }

    const radioChangeHandel = (e)=>{
        setOperator(e.target.value);
    }

    return (
        <>
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <input onChange={changeHandelA}  type='text' placeholder='Nhập a'></input>
            <br/>
            <input onChange={changeHandelB} type='text' placeholder='Nhập b'></input>
            <br/>
            <input  name = 'group'type = "radio" onChange = {radioChangeHandel} value="+"></input> <span>+</span>
            <input name = 'group' type = "radio" onChange = {radioChangeHandel} value="-"></input> <span>-</span>
            <input name = 'group' type = "radio" onChange = {radioChangeHandel} value="*"></input> <span>*</span>
            <input name = 'group' type = "radio" onChange = {radioChangeHandel} value="/"></input> <span>/</span>
            <br/>
            <button onClick = {clickHandel}>Cal</button>
            <br/>
            <span>{result}</span>

        </div>
        </>
    )
}

export default Bai_3;