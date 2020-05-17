var date1 = document.getElementById("date");
var list = document.getElementById("list");
var input = document.getElementById("input");
// variables
let LIST=[], id=0;
// giving classes a name
var CHECK = "fa-checked";
var UNCHECK = "fa-unchecked";
var Strike = "line";

// to show current date
var xy = {weekday : "long", month:"short", day:"numeric"};
var today = new Date();

date1.innerHTML = today.toLocaleDateString("en-US", xy);

// adding the items

function addToDo(add, id, done, trash){
    
    if(trash){ return; }
    
    var DONE = done ? CHECK : UNCHECK;
    var LINE = done ? Strike : "";
    
    var item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${add}</p>
                    <i class="fa fa-trash de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    var position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

// retrieve the users's input
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        var add = input.value;
        
        if(add){
            addToDo(add, id, false, false);
            
            LIST.push({
                name :add,
                id : id,
                done : false,
                trash : false
            });
            id++;
        }
        input.value = "";
    }
});


// if the task is completed
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(Strike);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// to delete the item
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}

// to target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element
    const elementJob = element.attributes.job.value; // it will return whether the element is completed or needs to be deleted
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
});

















