const calcTip = (order) =>{
    return order >= 50 && order <= 300 ? order*0.15.toFixed(2) : order*0.2.toFixed(2)
}

const bills = [125,555,44]

const tips = [];

bills.forEach(bill =>{
    tips.push(calcTip(bill))
})

const total = bills.map((bill,index) => {
    return bill + tips[index]
});


total.forEach((item,index) =>{
    console.log(`Bill ${bills[index]} , tip ${tips[index]} , total ${item}`)
})
