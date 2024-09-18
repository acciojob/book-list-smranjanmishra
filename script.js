document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input (ensure no field is empty)
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row for the book entry
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    // Insert columns (Title, Author, ISBN)
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Add the new row to the table
    list.appendChild(row);

    // Clear input fields after submission
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Add functionality to delete a book row
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            const row = e.target.parentElement.parentElement;
            row.remove(); // Remove the row
        }
    }
});
