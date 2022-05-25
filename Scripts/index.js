fetch("https://jsonplaceholder.typicode.com/todos/") 
.then(function(res) {
    return res.json()
})
.then((toDoItems) => {
    console.log(toDoItems);
    const result = document.getElementById('toDoItems');
    for (var i = 0; i < toDoItems.length; i++){
    const boolean = toDoItems[i].completed
    result.innerHTML += '<li>' +
        '<p>' + toDoItems[i].id + '<p>' +
        '<p>' + toDoItems[i].title + '<p>' +
        '<p>' + toDoItems[i].completed + '<p>' +
    '</li>';
    }
})


