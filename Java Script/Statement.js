// console.log("Hello")
// let a=5;
// let b=5;
// // console.log("The total price is:" , a +b,"Rs");
// let output = `The total price is: ${a+b} Rs.`  //Template literal
// console.log(output);

// if(a<10){
//     console.log("A is small.");  
// }
// else{
//     console.log("A is greater"); 
// }
// let age=18;
// if(age>18){
//     console.log("Eligible");
// }
// else if(age=18){
//     console.log("Adult ");
// }
// else{
//     console.log("Not eligible");

// }

let marks = 80;
if (marks >= 33) {
    if (marks >= 80) {
        console.log('Super');
    }
    else {
        console.log('A');
    }
}
else {
    console.log('Agli Bar ayio');

}

let string = " ";
if (string) {
    console.log("String is not empty");
}
else {
    console.log("String is  empty");

}
let strings = "";
if (strings) {
    console.log("String is not empty");
}
else {
    console.log("String is  empty");

}
let color = "green";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}
// alert("Something is wrong!");
console.error("This is a error msg.");
console.warn("This is warning message");

// For input:
let name= prompt("Enter your name:");
console.log(name);



 