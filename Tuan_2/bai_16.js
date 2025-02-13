const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = (arr)=>{
    const humanAges = arr.map(item => item <= 2 ? item*2 : item*4 + 16);
    console.log(humanAges);
    // loại bỏ các số nhỏ hơn 18
    const rusult = humanAges.filter(item => item >= 18);
    console.log(rusult);
    // tính trung bình
    const avg = rusult.reduce((sum,item) => sum + item,0)/rusult.length;
    console.log(`Tuổi trung bình là: ${avg.toFixed(2)}`);
}

calcAverageHumanAge(data1);
