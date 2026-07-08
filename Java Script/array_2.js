// let arr = [1,2,3,4,5];
// // let print = function(el){
// //     console.log(el);
// // }
// // arr.forEach(print);
// // arr.forEach(function(el) {
// //     console.log(el);
// // })
// // let arr2 = [{
// //     name: "Chirag",
// //     age:20
// // },{
// //     name: "Himanshi",
// //     age:20
// // },{
// //     name: "Preeti",
// //     age:18
// // }];
// // arr2.forEach((ages) =>{
// //     console.log(ages.age);
// // })
// let num =[1,2,4,4];
// let double= num.map(function(el){
//     return el*2;
// })
// console.log(double);
// let nums =[1,2,3,4,5,6,7,8,9,22,44,4,4,44,4];
// let even = nums.filter((no)=>{
//     return no %2==0;
// })
// console.log(even);

// let not = [2,4,8,10];
// let ans =not.every((el)=>{
//    return el%2==0;
// })
// console.log(ans);

// let check =[1,2,3,4];
// let answ = check.reduce((res,el)=>{
//     return res+el;
// })
// console.log(answ);
// let max =[1,4,5,8,9,3,2].reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// })
// console.log(max);

// // default parameter: **only apply on the last elements not on the first elements *
// function sum(a,b=3){
//     return a+b;
// }
// console.log(sum(1));
// console.log(sum(1,5));

// // spread function:
// let tro=Math.min(...check);
// console.log(tro);
//  let newarr =[...check];
//  console.log(newarr);

//  let data ={
//     email: "jaibabaki@gmail.com",
//     password: "av2",
//  };
//  let datacopy = {...data, id:123};
//  console.log(datacopy);
//  let arr =[12,8,3,3,4];
//  let obj ={...arr};
//  console.log(obj);

//  rest is opposite to spread: multiple data into array:
// function sum(...args){
//    return args.reduce((sum,el)=> sum+el);
// }
// sum(1,2,3,4,5);

// function min(a,b,c,d){
//     console.log(arguments);
// }
// min(1,2,3,4);


// Detsructing:
let names= ["tony", "aman","rohit","manu"];
// let winner = names[0];
// let runnerup = names[1];
// let rup2 = names[2];
// let[winner,runnerup,secondrunnerup, ...others] = names;
// console.log(winner,runnerup);
// console.log(others);

const student = {
    name:"chirag",
    age:20,
    class:13,
    subjects: ["hindi","english","math"],
    user:"chintu",
    pass:"232"
};
// let username = student.user;
// let passsword = student.pass;
let {user:username, pass,city="sonipat"} = student;
console.log(username,pass);



