//your JS code here. If required.
const form = document.getElementById("bookForm") ;
function addBook() {
 var title = document.getElementById('title').value;
 var author = document.getElementById('author').value;
 var isbn = document.getElementById('isbn').value;
 if (title && author && isbn) {
     var tableBody = document.getElementById('book-list');
     var newRow = tableBody.insertRow();
     
     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);
	 
     cell1.innerHTML = title;
     cell2.innerHTML = author;
     cell3.innerHTML = isbn;
     cell4.innerHTML = '<span class="delete" onclick="deleteRow(this)">X</span>';
     
	 form.reset() ;
 }
}

 function deleteRow(element) {
     var row = element.parentNode.parentNode;
     row.parentNode.removeChild(row);
 }