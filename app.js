const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  list.appendChild(li);
}
