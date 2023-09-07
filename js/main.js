const form = document.getElementById('form-input');
const formInput = document.getElementById('book-info');
const bookList = document.getElementById('book-list');

function addBooks(e) {
    e.preventDefault()

    const newItem = formInput.value;

    if (newItem === '') {
        alert('Please add a book')
    } else {
        createBookItem(newItem)
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

form.addEventListener('submit', addBooks);
