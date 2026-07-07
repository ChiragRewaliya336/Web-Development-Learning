let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);
// arr.forEach(function(el) {
//     console.log(el);
// })
// let arr2 = [{
//     name: "Chirag",
//     age:20
// },{
//     name: "Himanshi",
//     age:20
// },{
//     name: "Preeti",
//     age:18
// }];
// arr2.forEach((ages) =>{
//     console.log(ages.age);
// })
let num =[1,2,4,4];
let double= num.map(function(el){
    return el*2;
})
console.log(double);
let nums =[1,2,3,4,5,6,7,8,9,22,44,4,4,44,4];
let even = nums.filter((no)=>{
    return no %2==0;
})
console.log(even);

let not = [2,4,8,10];
let ans =not.every((el)=>{
   return el%2==0;
})
console.log(ans);

let check =[1,2,3,4];
let answ = check.reduce((res,el)=>{
    return res+el;
})
console.log(answ);
let max =[1,4,5,8,9,3,2].reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
})
console.log(max);

// default parameter: **only apply on the last elements not on the first elements *
function sum(a,b=3){
    return a+b;
}
console.log(sum(1));
console.log(sum(1,5));

// spread function:
let tro=Math.min(...check);
console.log(tro);
