const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate =  [4, 1, 15, 8, 3];

const arr = [...dogsJulia.slice(1,4),...dogsKate];


const checkDogs = (arr)=>{
    arr.forEach((item,index) =>{
        if(item >= 3){
            console.log(`Dog number ${index + 1} is an adult, and is ${item} years old`);
        }
        else{
            console.log(`Dog number ${index + 1} is still a puppy`);
        }
    });
}

checkDogs(arr);