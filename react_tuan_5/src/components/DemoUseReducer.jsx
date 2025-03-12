import { useState ,useReducer} from "react"

const init = {
    result : 0
}

function reducer(state,action){
    switch (action.opater) {
        case '+':
            return {result : action.a + action.b}
            break;
        case '-':
            return {result : action.a - action.b}
            break;
        case '*':
            return {result : action.a * action.b}
            break;
        case '/':
            return {result : action.a / action.b}
            break;

        default:
            break;
    }

}

function DemoUseReducer() {

    const [state, dispatch] = useReducer(reducer,init);
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [opater,setOpater] = useState();

    const handelClick = ()=>{
        dispatch({a,b,opater})
    }

    const handelChange = (e)=>{
        setOpater(e.target.value)
    }

    const handelSetA = (e)=>{
        setA(parseInt(e.target.value))
    }

    const handelSetB = (e)=>{
        setB(parseInt(e.target.value))
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input type='text' placeholder='Nhập a' style={{ marginBottom: '5px' }} onChange={handelSetA}></input>
                <br />
                <input  type='text' placeholder='Nhập b' onChange={handelSetB}></input>
                <br />
                <input name='group' type="radio" value="+" onChange={handelChange}></input> <span>+</span>
                <input name='group' type="radio" value="-" onChange={handelChange}></input> <span>-</span>
                <input name='group' type="radio" value="*" onChange={handelChange}></input> <span>*</span>
                <input name='group' type="radio" value="/" onChange={handelChange}></input> <span>/</span>
                <br />
                <button onClick = {handelClick}>Cal</button>
                <br />
                <span>{state.result}</span>

            </div>
        </>
    )

}

export default DemoUseReducer