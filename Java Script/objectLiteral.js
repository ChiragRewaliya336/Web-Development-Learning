
// console.log(students);

let post={
    username: "chiragrewaliya",
    content: "This is my first post" ,
    like: 150,
    reposts: 2,
    tags: ["my", "mine"],
};

// console.log(post);
// console.log(post["content"]);
// console.log(post.reposts);
let trying = {
    1:'a',
    2:'b',
    true:'c',
    null:'d',
    undefined: 'e',
};
// console.log(trying[1]);
// console.log(trying.1); give error becuse it cannot convert it into the string

// add/update:
let students ={
    name: "CHirag",
    age: 20
};
students.name =["Chirag", "Himanshi"]; 
students.gender =["Male","Female"];
// delete:
// delete students.age;
// console.log(students);

// nesting objects:

const classINfo ={
    aman:{
        grade: "B",
        city: "Snpt"
    },
    sahil: {
        grade: "B",
        city: "Snpt"
    },
    rohit:{
        grade: "B",
        city: "Snpt"
    }
};
// console.log(classINfo);
// console.log(classINfo.aman.city);

// array of objects:
const classInfo =[
    {
        grade: "B",
        city: "Snpt"
    },
     {
        grade: "B",
        city: "Snpt"
    },
        {
        grade: "B",
        city: "Snpt"
    }
];
// console.log(classInfo);
// console.log(classInfo[1]);
// console.log(classInfo[1].grade);

// Math objects:
// Math.PI  
Math.pow(2,4);
// Math.floor for round-of small
// Math.ceil for larger int value round-of
// Math.random give value btw 0 and 1 \

// Random integer btw 1 to 10
let num = Math.random();
num *=10;
num= Math.floor(num);
console.log(num);
// Math.floor(Math.random()*10);