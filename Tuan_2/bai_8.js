const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52]

const calcTip = (order) =>{
    return order >= 50 && order <= 300 ? order*0.15.toFixed(2) : order*0.2.toFixed(2)
}

const tips = [];
let totals = [];

bills.forEach(bill =>{
    tips.push(calcTip(bill))
})

totals = bills.map((bill,index) => {
    return bill + tips[index]
});


const calcAverage = (arr) =>{
    return arr.reduce((cal,item) =>{
        return cal + item
    },0)/arr.length;
}

totals.forEach((item,index) =>{
    console.log(`Bill ${bills[index]} , tip ${tips[index]} , total ${item}`)
})

console.log( 'Trung bình của mảng totals là :' + calcAverage(totals))