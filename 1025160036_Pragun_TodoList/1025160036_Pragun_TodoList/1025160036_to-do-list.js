// Please press inspect and check the console for output in the html file
let list=[];
function addtask(){
    let ask = 'y';
    while(ask != 'n'){
    let task = prompt("Enter a task");
    list.push(task);
    ask = prompt("Do you want to add more tasks? (y/n)");
    }menu();}
function deletetask(){
    let del=prompt(`${viewtask()}Enter the task to be deleted`);
    let index = list.indexOf(del);
    if(index !== -1){
        list.splice(index,1);
    }else{
        console.log("Task not found");
    }menu();}
function viewtask(){
    console.log("Your tasks are:");
    for (let i of list){
        console.log(i);
    }console.log('\n');
    menu();}
function menu(){
    let choice=prompt("MENU\nEnter 1 to add a task\nEnter 2 to delete a task\nEnter 3 to view tasks\nEnter 4 to exit");
    switch(choice){
        case '1':
            addtask();
            break;
        case '2':
            deletetask();
            break;
        case '3':
            viewtask();
            break;
        case '4':
            console.log("Exiting...");
            break;
    }
}
menu();
//==================================================================================================================================