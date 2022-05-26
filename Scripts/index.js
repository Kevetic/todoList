function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const todos = await response.json();

      if (!todos) {
        return;
      }
  
      const todoItemsElement = document.getElementById("todo-item-list");
  
      const color = {
        true: "green",
        false: "red"
      };
  
      todos.forEach(({ id, title, completed }) => {
        const newHtml = `
          <li>
            <span class='listID'>${id}</span>
            <p>${capitalize(title)}</p>
            <span class='task'>Task Completed:<span class='completes' style="color: ${color[completed]}">${completed}<span/></span>
          </li>
        `;
  
        todoItemsElement.innerHTML += newHtml;
      });
    } catch (e) {
      console.error(e);
    }
  })();
  