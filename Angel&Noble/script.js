var books = [];
function addbook(){
let newBook = document.getElementById('myBooks');
	if (newBook !== '') {

		books.push('newBook');
		//should I print it?
		document.getElementById('newBook').value = '';

		displaybook();
  }
}

function displaybook(){
	
	document.getElementById('stockDisplay').innerHTML = 'STOCK: ' + books.length; 






}		