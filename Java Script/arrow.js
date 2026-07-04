const student ={
    name: "Chirag",
    age: 20,
    eng:85,
    math:98,
    sci:98,
    getavg(){
        let avg =(this.eng +this.math + this.sci)/3;
        console.log(avg);
    }
};
// console.log(student.getavg());

// Try and Catch system:
// try{
//     console.log(a); 
// } catch(e){
//     console.log("Variable is not exist");
//     console.log(e);
    
// }

// Arrow Function:
const sum = (a,b) =>{
    console.log(a+b);
}
const pow = (a,b) =>{
    console.log(a**b);
}
const hello = () =>{
    console.log("hello");
}

// sum(8,4);
// pow(2,4);
// console.log(sum);

// implicit return in arrow function:
const mul = (a,b) =>(
    a*b   //    can run without return statement.
)
const prod = (a,b) => a*b   //runn valid
// console.log(mul(5,4));

// Set Timeout function:
// console.log("Hi, i am chirag");
// setTimeout( () =>{
//     console.log("waiting...");
    
// },4000)
// console.log("Thanks");


// Set invertal:
// let id= setInterval( () =>{
//     console.log("waiting...");
// },2000)
// console.log(id);
// let id2= setInterval( () =>{
//     console.log("waiting2...");
// },2000)
// console.log(id2);
// clearInterval(id2)  For stoping.


// This with arrow function:
const Student ={
    name: "Chirag",
    marks: 90,
    prop: this, //Global scope
    getName: function(){
        console.log(this); 
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //Parents's scope -.Window 
        return this.marks;
    },
    getInfo1: function(){
        setTimeout( () =>{
            console.log(this); //student
        },2000)
    },
    getInfo2: function(){
        setTimeout( function() {
            console.log(this); //window
        },2000)
    },
};
console.log(Student.getInfo1());
console.log(Student.getInfo2());

