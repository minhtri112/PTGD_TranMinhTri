const arrTest = [
    'underscore_case', 
    'first_name',
    'Some_Variable',
    'calculate_AGE' ,
    'delayed_departure ',
]

const camelCaseConvert = (str) =>{
    const arrString = str.split('_');
    let result = "";
    result += arrString[0].toLowerCase();
    result += arrString.slice(1).map(str =>{
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    });
    return result;
}

console.log(arrTest);
console.log("--------------------");

arrTest.forEach(str =>{
    const result = camelCaseConvert(str);
    console.log(result);
});

