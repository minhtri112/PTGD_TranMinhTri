const gameEvents = new Map([ 
    [17, '⚽ GOAL'], 
    [36, '🔁 Substitution'], 
    [47, '⚽ GOAL'], 
    [61, '🔁 Substitution'], 
    [64, '🔶 Yellow card'], 
    [69, '🔴 Red card'], 
    [70, '🔁 Substitution'], 
    [72, '🔁 Substitution'], 
    [76, '⚽ GOAL'], 
    [80, '⚽ GOAL'], 
    [92, '🔶 Yellow card'], 
]);



const events = [...new Set(gameEvents.values())];
console.log(events);
console.log('---------------------');

gameEvents.delete(64);
console.log(gameEvents);
console.log('---------------------');

let totalMinutes = 0;
gameEvents.forEach((value, key) => {
    totalMinutes += key;
});

console.log(`An event happened, on average, every ${(totalMinutes/gameEvents.size).toFixed(2)} minutes`);
console.log('---------------------');


const updatedGameEvents = new Map();
gameEvents.forEach((value, key) => {
    if(value.includes('GOAL')){
        if(key <= 45){
            updatedGameEvents.set(`[FIRST HALF] ${key} :`,value)
        }
        else{
            updatedGameEvents.set(`[SECOND HALF] ${key} :`,value)
        }
    }
    else{
        updatedGameEvents.set(key,value);
    }
})

console.log(updatedGameEvents);