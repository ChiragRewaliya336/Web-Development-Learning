let todo = [];

let req = prompt("Please Enter your choice");

while (true) {

    if (req == "quit") {
        console.log("Quitting app");
        break;
    }

    if (req == "list") {
        console.log("____________");
        for (let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("____________");
    }

    else if (req == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if(re="delete"){
        let idx =prompt("Please enter no you want to delete:");
        todo.splice(idx,1);
        console.log("Task deleted.");
        
    }

    else {
        console.log("Invalid choice!");
    }

    req = prompt("Please Enter your choice");
}