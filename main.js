let addForm = document.querySelector('#addForm')
let newItem = addForm.querySelector("#item")
let ul = document.querySelector('ul')
let elSearch = document.querySelector('#filter')

const addFunction = (e) => {
  e.preventDefault()
  let newList = document.createElement('li')
  newList.textContent = newItem.value
  newList.className = 'list-group-item'
  let newButton = document.createElement('button')
  newButton.textContent = 'X'
  newButton.classList = 'btn btn-danger btn-sm float-end delete'
  newList.appendChild(newButton)
  ul.appendChild(newList)
  newItem.value = null
}
addForm.addEventListener('submit', addFunction)

const removeItem = (e) => {
  if (e.target.classList.contains('delete')) {
    ul.removeChild(e.target.parentElement)
  }
}
ul.addEventListener('click', removeItem)

const searchFunction = (e) => {
  let text = e.target.value.toLowerCase();
  let li = ul.querySelectorAll('li')
  Array.from(li).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    }else{
      item.style.display = 'none'
    }
  })
}
elSearch.addEventListener('keyup', searchFunction)