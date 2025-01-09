const mark = {
    name : "Mark",
    mass : 78,
    height : 1.69
}

const john = {
    name : "John",
    mass : 92,
    height : 1.95
}

const calcBMI = (person) => {
    const BMI = person.mass / person.height ** 2;
    person.BMI = BMI.toFixed(2);
    return person;
}

calcBMI(mark)
calcBMI(john)

if(mark.BMI > john.BMI){
    console.log(`${mark.name} BMI (${mark.BMI}) is higher than ${john.name} (${john.BMI})!`);
}
else{
    console.log(`${john.name} BMI (${john.BMI}) is higher than ${mark.name} (${mark.BMI})!`);
}

