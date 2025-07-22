const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    input.value = '';
  }
}); 