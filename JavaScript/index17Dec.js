function takeOrder(a,b){
    return a*10;
}
function isPlacesOrder(total){
    if(total>0){
        return true;
    }
return false;
}
function canDrive(orderAmount,amountPaid){
    if(orderAmount==amountPaid){
        return true;
    }
    return "Pay your bils you filthy human";
}
function greetingMessage(){
    console.log("Welcome to code MacD welll which is weied");
}
greetingMessage();
console.log(takeOrder(4));
console.log(isPlacesOrder(takeOrder(4)));
console.log(canDrive(40,40));