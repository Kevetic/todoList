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
            <span>${id}</span>
            <h2>${title}</h2>
            <span style="color: ${color[completed]}">${completed}<span/>
          </li>
        `;
  
        todoItemsElement.innerHTML += newHtml;
      });
    } catch (e) {
      console.error(e);
    }
  })();
  