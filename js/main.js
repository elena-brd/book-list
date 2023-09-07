const form = document.getElementById('form-input');
const formInput = document.getElementById('book-info');
const bookList = document.getElementById('book-list');
const allertMsg = document.querySelector('.allert');
const successtMsg = document.querySelector('.success');

function addBooks(e) {
    e.preventDefault()

    const newItem = formInput.value;

    if (newItem === '') {
        allertMsg.style.display = 'block';
        setTimeout(() => {
            allertMsg.style.display = 'block';
            allertMsg.remove()
        }, 3000)
    } else {
        createBookItem(newItem);
        successtMsg.style.display = 'block';
        setTimeout(() => {
            successtMsg.style.display = 'block';
            successtMsg.remove()
        }, 3000)
    }
    formInput.value = '';
}


function createBookItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    bookList.appendChild(li);

    const btn = deleteBtn('remove-item btn-link text-red btn-delete');
    li.appendChild(btn)
}

function deleteBtn(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon)

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}


function removeBook(e) {
    if (e.target.parentElement.classList.contains('btn-delete')) {
        confirm('Are you sure?')
        e.target.parentElement.parentElement.remove()
    }
}


form.addEventListener('submit', addBooks);
bookList.addEventListener('click', removeBook)
