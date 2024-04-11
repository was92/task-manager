// Call these functions after the page loads
window.onload = () => {
  renderTodoItems()
  renderCompletedItems()
}

// Add some items to the list
const todoItems = [
  {
    name: 'example task 1',
    dueDate: '0000-00-00'
  },
  {
    name: 'example task 2',
    dueDate: '0000-00-00'
  }
]

// Add some completed items
const completedItems = [
  {
    name: 'example completed task',
    dueDate: '0000-00-00'
  }
]

// Show the todo List on the page
const renderTodoItems = () => {
  let todoListHTML = ''

  todoItems.forEach((item, index) => {
    const itemHTML = `
      <div>${item.name}</div>
      <div>${item.dueDate}</div>
      <button class="delete-button">&times;</button>
      <button class="complete-button">&check;</button>
    `

    todoListHTML += itemHTML
  })

  document.querySelector('.todo-items').innerHTML = todoListHTML

  // Delete Todos
  document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoItems.splice(index, 1)
      renderTodoItems()
    })
  })

  // Mark Todos Complete
  document.querySelectorAll('.complete-button').forEach((completeButton, index) => {
    completeButton.addEventListener('click', () => {
      // Fetch todo
      const item = todoItems[index]

      // Remove from todoItems
      todoItems.splice(index, 1)

      // Add to Completed Items
      completedItems.push({
        name: item.name,
        dueDate: item.dueDate
      })

      renderTodoItems()
      renderCompletedItems()
    })
  })
}

// Show completed items on the page
const renderCompletedItems = () => {
  let completedHTML = ''

  completedItems.forEach((item, index) => {
    const itemHTML = `
      <strike>${item.name}</strike>
      <strike>${item.dueDate}</strike>
    `

    completedHTML += itemHTML
  })

  document.querySelector('.completed-items').innerHTML = completedHTML
}

document.querySelector('.create-button').addEventListener('click', () => {
  createTodo()
})

// Create a Todo item
const createTodo = () => {
  const todoInput = document.querySelector('.todo-input')
  const dueDateInput = document.querySelector('.due-date-input')

  todoItems.push({
    name: todoInput.value,
    dueDate: dueDateInput.value
  })

  todoInput.value = ''
  dueDateInput.value = ''

  renderTodoItems()
}
