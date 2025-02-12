const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr)=>{
    arr.forEach((value,index)=>{{
        console.log(`${value}°C in ${index+1} days`)
    }})
}
printForecast(data1);
console.log('-------------------')
printForecast(data2);
