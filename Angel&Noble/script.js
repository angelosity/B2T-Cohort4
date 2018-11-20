let books = [
	{ Title: 'Biology of Belief', Author: 'Bruce Lipton', BookStatus: 'in' },
	{ Title: 'Power Of Now', Author: 'Eckart Tolle', BookStatus: 'in' },
	{ Title: 'Mind', Author: 'John Brockman', BookStatus: 'out' },
	{ Title: 'Fourth Agreement', Author: 'Miguel Ruiz', BookStatus: 'in' },
	{ Title: 'Think And Grow Rich', Author: 'Napoleon Hill', BookStatus: 'in' }
];

function addBook() {
	let booksTitle = document.getElementById('bookTitle').value;
	let booksAutor = document.getElementById('bookAuthor').value;

	books.push({
		Title: booksTitle,
		Author: booksAutor,
		BookStatus: 'in'
	})
	displayBooks();
}

function displayBooks() {

	document.getElementById('stockDisplay').innerHTML = 'Stock: ' + books.length;

	document.getElementById('bookDisplay').innerHTML = '';

	for (let i = 0; i < books.length; i++) {
		document.getElementById('bookDisplay').innerHTML += `<div style="background-color:#F2F7F2; border-radius: 7px;" ><h4>${books[i].Title}</h4>
			<h6>Author: ${books[i].Author}</h6>
			<input type="button" value="${books[i].BookStatus}" onclick="changeButtonInOut(${i})" />
			<input type="button" value="DELETE" onclick="deleteBook(${i})" />
			</div>

			<hr/>`;

	}
}

function deleteBook(index) {

	books.splice(index, 1);

	displayBooks();
}

function changeButtonInOut(index) {

	if (books[index].BookStatus == 'in') {
		books[index].BookStatus = 'out';
	} else {
		books[index].BookStatus = 'in';
	}
	displayBooks();
}
