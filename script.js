document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-group');
    const bookList = document.getElementById('book-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addBook();
    });

    bookList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            deleteBook(e.target);
        }
    });

    function addBook() {
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const isbnInput = document.getElementById('isbn');

        if (titleInput.value && authorInput.value && isbnInput.value) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${titleInput.value}</td>
                <td>${authorInput.value}</td>
                <td>${isbnInput.value}</td>
                <td><button class="delete">X</button></td>
            `;
            bookList.appendChild(row);

            // Clear input fields
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
        }
    }

    function deleteBook(button) {
        button.closest('tr').remove();
    }
});