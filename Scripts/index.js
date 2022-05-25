fetch("https://jsonplaceholder.typicode.com/todos/") 
.then((res) => {
    return res.json()
})
.then((toDoItems) => {
    // console.log(toDoItems);
    const result = document.getElementById('toDoItems');
    for (var i = 0; i < toDoItems.length; i++){
        result.innerHTML += '<li>' +
        '<span>' + toDoItems[i].id + '</span>' +
        '<h2>' + toDoItems[i].title + '</h2>' +
        '<span id="completes">' + toDoItems[i].completed + '</p>' +
        '</li>';
    }
    return toDoItems
})
.then((res) => {
    for (var i = 0; i < res.length; i++){
        let completedClr = res[i].completed
        if( completedClr === false) {
            document.getElementById('completes').style.color = 'red'
        } else {
            document.getElementById('completes').style.color = 'green'
        }
    }
})

