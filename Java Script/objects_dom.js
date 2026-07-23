let para = document.querySelector('p');
// console.dir(para);
// para.innerText;
// para.innerHTML;
// para.textContent;
// para.innerText="abc";
// 'abc'

// :-----This is the manipulating attribute in java script:-------
// let img = document.querySelector('img');
// img
// <img src=​"https:​/​/​picsum.photos/​id/​237/​500/​350" id=​"spidermanImg" alt=​"Main Image">​
// img.getAttribute('id')
// 'mainImg'
// img.setAttribute('id', 'spidermanImg')
// let img = document.querySelector('img');
// undefined
// img.setAttribute('src',"https://picsum.photos/id/1035/200/200");
// undefined


// For Maipulating the class using classList:
// let img = document.querySelector('img');
// undefined
// img.classList
// DOMTokenList ['abc', value: 'abc'] 
// for adding new class:
// let img = document.querySelector('img');
// undefined
// img.classList.add("Ram");
// undefined
// img.classList
// DOMTokenList(2) ['abc', 'Ram', value: 'abc Ram']

// For adding removing the class list:
// let img = document.querySelector('img');
// console.log(img.classList);
// console.log(img.classList.add("Ram"));
// console.log(img.classList.remove("Ram"));
// console.log(img.classList.contains("abc")); //check it exists or not 
// console.log(img.classList.toggle("abc")) //toggle used if a class exit then remove it if not then add it
// console.log(img.classList);
// console.log(img.classList.toggle("abc"))

// For Manipulatinf style:
let img = document.querySelector('img');
console.dir(img)
let heading = document.querySelector('h1')
heading.style.color = 'red';
let links = document.querySelectorAll('.box a')
// for(let i=0;i<links.length; i++){
//     links[i].style.color = "yellow";
// }
for(links of links){
    links.style.color = 'yellow'; //inline css 
}

// Navigate means wanna transfer from one element to another element:
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
// let box = document.querySelector
// console.log(box.);
let newp = document.createElement('p');
console.dir(newp);
newp.innerText = "Hi Chirag";
let body = document.querySelector('body'); // for adding this element to the body in parenthesis you enter the parent of it
body.appendChild(newp);
newp.append("This is new text"); //used to adding extra thing into exitsing or can be modify.
let box = document.querySelector('.box');
let btn = document.createElement('button');
btn.innerText="Click me";
box.appendChild(btn);
 
// Here is the new function that is prepend how it is different from the append the append add the thing at the last but the prepand add the thing a the starting of the elmenets 
box.prepend(newp);

// Now here is new form this function we can add the thing acc to our requirment let us describe this :
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);

// To remove the remoe function is used
body.removeChild(btn);

