const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var newValue = parseInt(itemCountSpan.textContent)
  newValue += 1
  itemCountSpan.textContent = newValue
  uncheckedCountSpan.textContent = newValue

  var todoli = document.createElement('li')
  todoli.classList.add(classNames.TODO_ITEM)

  var checkboxInput = document.createElement('input')
  checkboxInput.setAttribute('type', 'checkbox')
  checkboxInput.setAttribute('onclick', 'countUnCheck()')
  checkboxInput.classList.add(classNames.TODO_CHECKBOX)
  checkboxInput.checked = false
  
  list.insertBefore(todoli, list.firstChild)
  
  var td = document.getElementsByTagName("li")[0]
  td.innerHTML = "todo " + newValue
  td.insertBefore(checkboxInput, td.firstChild)

  countUnCheck()

}

function countUnCheck()
{
  var counter = 0
  var checkbox = document.getElementsByClassName(classNames.TODO_CHECKBOX)

  for (let index = 0; index < checkbox.length; index++) {
    var x = checkbox[index].checked
    if (checkbox[index].checked == false) {
      counter += 1
    } 
  }
  
  uncheckedCountSpan.textContent = counter
}

