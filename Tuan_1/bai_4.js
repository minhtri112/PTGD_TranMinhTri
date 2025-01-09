const order = 275;
let tip;
if (order >= 50 && order < 300) {
    tip = order * 0.15;
}
else{
    tip = order * 0.2;
}

console.log(`Số tiền hóa đơn : ${order} , số tiền tip : ${tip.toFixed(2)}, tổng tiền : ${(order + tip).toFixed(2)}`);