let students = ["Chirag","Himanshi","Jatin"];
let num =[4,5,6];
let info =["Chirag",20,"BCA"]; //mixed datatypes allowed in this lng 

let empArr =[];
// info[0][0] used for accessing strig index
students[2]="Rahul"; //allowed changed
students[3] ="Pardeep";

// array function:
students.push("Jatin");
students.push("Anshu");
students.pop();
students.unshift("Preeti");
students.shift();
// students.indexOf("Chirag"); for find index in array if yes then return if not then return -1
// students.includes("Chirag"); for finding elements in array if yes then return if not then return -1
// students.concat(info); used to merge two arrays
// sum.reverse(); it will effect the original array 

// slice method:
// students.slice()
// :-['Chirag', 'Himanshi', 'Rahul', 'Pardeep', 'Jatin']

// students.slice(2);
// :- ('Rahul', 'Pardeep', 'Jatin']

// students.slice(2,3)
// :-['Rahul']

// students.slice(-2);
// :-['Pardeep', 'Jatin']

// Differnce between slice and splice : the slice create a copy of array then implement  but the splice change in the original array:
let colors =["red", "blue", "orange", "pink", "white"];
// here is the operation of splice with output:
// colors
// :-['red', 'blue', 'orange', 'pink', 'white']

// colors.splice(4);
// ['white']
// colors
// ['red', 'blue', 'orange', 'pink']

// colors.splice(0,1);
// :-['red']
// colors
// :-['blue', 'orange', 'pink']

// colors.push("black");
// 4
// colors
// :-['blue', 'orange', 'pink', 'black']

// colors.splice(1,2);
// :-['orange', 'pink']
// colors
// :-['blue', 'black']

// colors.splice(0,0,"Green", "Gray");
// []
// colors
// :-['Green', 'Gray', 'blue', 'black']

// colors.splice(1,0,"VIOLET");
// []
// colors
// :-['Green', 'VIOLET', 'Gray', 'blue', 'black']

// Here is sort method in array with output i run this into console of chrome not in terminal:
// let char =['B','A','E','C','a'];
// colors.sort();
// :-['blue', 'orange', 'pink', 'red', 'white']
// char.sort();
// :-['A', 'B', 'C', 'E', 'a']

// The sort method is not apply on the number arrays beacause first it convert array into char then sort it according to the character that's why the sorting in a number array is not working properly 
// let nums =[100,45,101,88,95,33,20,12,25,9];
// nums.sort();
// :-[100, 101, 12, 20, 25, 33, 45, 88, 9, 95]

// Practice Question based on the splice:
let months = ["januray", "July", "March", "august"];           
// months
// :-['januray', 'July', 'March', 'august']
// months.splice(0,2,"july","june");
// :-['januray', 'July']
// months
// :-['july', 'june', 'March', 'august'] 

let lang =['c','c++','html','javascript','python','java','c#','sql'];
// lang
// :-['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
// lang.reverse();
// :-['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']
// lang.indexOf('javascript');
// 4

// Refernce in array & string in string same but not in array:
"name"=="name"
true
"name"==="name"
true
// [1]==[1] because both array's address is different
false
[1]===[1]
false
// []==[]
false

let arr =['a','b'];
arr
:-['a', 'b']
let arrCopy =arr;
arrCopy
:-['a', 'b']
arrCopy.push('c');
3
arr
:-['a', 'b', 'c']

// In constant array : operations are allowed but the new address assign to same array is not allowed , operations like push, pop shift , unshift are allowed in a contsant array 
let numse = [ [2,4], [3,4],[5,6]];
numse
:-[Array(2), Array(2), Array(2)]
num[0][1];
numse[0][1]
4