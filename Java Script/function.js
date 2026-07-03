function hello() { // define
    console.log("hello");

}
// hello(); //calling

// function rolldice() {
//     let num = Math.random();
//     num *= 6;
//     num = Math.floor(num);
//     console.log(num);
//     let random = Math.floor(Math.random() * 6);
//     console.log(random);
// }
// // rolldice();

// function printName(name){
//     console.log(name);
// }
// printName("Chirag");
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(sum(1,2),3));
 {
    let a =9;
 }
//  console.log(a);
function outerfn(){
    let a=10;
    function innerfun(){
        console.log(a);
    }
    innerfun();
}
 outerfn();
 let sum = function(a,b){
    return a+b;
 }
//  console.log(sum(1, 2)); 

 function multiplegreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
 }
 let greet = function(){
    console.log("hello");
 }
//  multiplegreet(greet,10);
 const calc = {
    num:55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){ //sub(a,b){   }
        return a-b;
    },
    pro: function(a,b){
        return a*b;
    }
 };
console.log(calc.add(1,2));

