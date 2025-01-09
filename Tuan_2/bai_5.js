const calcAverage = (arr) =>{
    return arr.reduce((cal,item) =>{
        return cal + item
    },0) / arr.length
}

const dolphins = [44, 23 ,71]
const koalas = [44, 23 ,71]

const avgDolphins = calcAverage(dolphins)
const avgkoalas = calcAverage(koalas)

const checkWinner = (a,b) =>{
    if(a >= 2*b){;
        return `Dolphins win (${a} vs ${b})`;
    }
    else if(b >= 2*a){
         return `Koalas win (${b} vs ${a})`;
    }
    else{
        return 'No team wins';
    }
}

console.log(checkWinner(avgDolphins,avgkoalas))
