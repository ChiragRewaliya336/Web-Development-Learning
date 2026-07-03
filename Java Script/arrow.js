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
console.log(student.getavg());
