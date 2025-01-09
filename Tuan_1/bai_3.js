const dolphins = [96, 108, 89];
const koalas = [88,91,110];

const dolphins_tb = dolphins.reduce((cal,item) => cal + item, 0) / dolphins.length; 
const koalas_tb =  dolphins.reduce((cal,item) => cal + item, 0) / koalas.length;

console.log('Điểm trung bình dolphin : ' + dolphins_tb.toFixed(2));
console.log('Điểm trung bình koalas : ' + koalas_tb.toFixed(2
    
));

if(dolphins_tb > koalas_tb){
    console.log('Dolphin cao hơn Koalas');
}
else if(dolphins_tb < koalas_tb){
    console.log('Koala cao hơn Koalas');
}
else{
    console.log('Hòa');
}

const dolphins_check =  dolphins.some(item => item >= 100);
const koalas_check =  koalas.some(item => item >= 100);

if(dolphins_tb > koalas_tb && dolphins_check){
    console.log('Dolphin win');
}
else if(dolphins_tb < koalas_tb && koalas_check){
    console.log('Koala win');
}
else if(dolphins_tb == koalas_tb && Math.max(...dolphins) > Math.max(...koalas)){
    console.log('Dolphin win');
}
else if(dolphins_tb == koalas_tb && Math.max(...dolphins) < Math.max(...koalas)){
    console.log('Koala win');
}
else{
    console.log('Không ai giành cup');
}
