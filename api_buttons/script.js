function registerEvents(){
    document.getElementById("loadTodos").addEventListener("click", function(){
        console.log("Load Todos");
        loadTodos();
    });
    document.getElementById("loadUser").addEventListener("click", function(){
        console.log("Load User");
        loadUser();
    });
}

function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        let html ="";
        data.forEach(element => {
            html += "<li class='list-group-item list-group-item-action'>" + element.title +"</li>";
        });
        document.getElementById("todoList").innerHTML = html;
    })
    .catch(function (err){
        console.log(err);
    });
}
function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        let html ="";
        data.forEach(element => {
            html += "<li class='list-group-item list-group-item-action'>" + element.name +"</li>";
        });
        document.getElementById("todoList").innerHTML = html;
    })
    .catch(function (err){
        console.log(err);
    });
}

registerEvents();