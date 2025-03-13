import React, {useMemo} from 'react';
function ResultUseMemo(props) {
    const {a,b} = props;
    const myCal = useMemo(()=>{
        console.log('Chạy vào hàm MyCal');
        return parseInt(a)+parseInt(b);
    },[a,b])


  return <div>{myCal}</div>;
}

export default ResultUseMemo;