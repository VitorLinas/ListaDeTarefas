function newTask(){
    
    var taskDescription = document.getElementById("newTask").value;

    if(taskDescription != ""){
        createTask(taskDescription);
        updateScreen();
    }
    else{
        window.alert("Insira alguma tarefa!")
    }
    // conseguir sozinho e com prática e teste
}

function updateScreen(){
    var list = "<ul>"

    tasks.forEach((task=>{
        list += "<li id-data="+task.id+">"+task.data.description+"</li>"
        list += "<button onclick=removeTask(this)  id-data=" + task.id+ "><img src='lixeira.SVG' alt='lixeira'></button>"
    }));

    list += "</ul>"
   

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

function removeTask(element){

    var id = element.getAttribute("id-data");

    deleteTask(id);
    updateScreen(); 
}

function limpar(){
    localStorage.setItem("tasks", "")
    tasks = []
    updateScreen()
}

loadTasks();
updateScreen();


