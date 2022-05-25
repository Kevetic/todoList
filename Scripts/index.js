fetch("https://jsonplaceholder.typicode.com/todos/") 
.then(function(res) {
    return res.json()
})
.then((toDoItems) => {
    console.log(toDoItems);
    const result = document.getElementById('toDoItems');
    for (var i = 0; i < toDoItems.length; i++){
    result.innerHTML += '<li>' +
        '<span>' + toDoItems[i].id + '</span>' +
        '<h2>' + toDoItems[i].title + '</h2>' +
        '<span>' + toDoItems[i].completed + '</p>' +
    '</li>';
    }
})


