// https://docs.djangoproject.com/en/3.2/ref/csrf/#acquiring-the-token-if-csrf-use-sessions-and-csrf-cookie-httponly-are-false
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

/*
function getAllTodos(url) {
  
  fetch(url, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    }
  })
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    (data.context).forEach(todo => {
      const todoHTMLElement = `
        <li>
          <p>Task: ${todo.task}</p>
          <p>Completed?: ${todo.completed}</p>
        </li>`
        todoList.innerHTML += todoHTMLElement;
    });
  });
}
*/

// NUeva funcion para utilizar async y await
  const getAllTodos = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      }
    });

    const data = await response.json();

    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    (data.context).forEach(todo => {
      const todoHTMLElement = `
        <li>
          <p>Task: ${todo.task}</p>
          <p>Completed?: ${todo.completed}</p>
        </li>`
      todoList.innerHTML += todoHTMLElement;
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};



  const operationGetAllTodos = async (url) => {
  r = await fetch(url, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    }
  })

  dt = await r.json();

  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  (dt.context).forEach(todo => {
    const todoHTMLElement = `
        <li>
          <p>Task: ${todo.task}</p>
          <p>Completed?: ${todo.completed}</p>
        </li>`
    todoList.innerHTML += todoHTMLElement;
  });
};


const addTodo = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({
        payload: payload
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};


const updateTodo = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({
        payload: payload
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};


const deleteTodo = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": getCookie("csrftoken"),
      }
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
