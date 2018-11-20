 let  books = [

 {Title:'the Biology of Belief',Author:'Bruce Lipton',Published:2004,ISBN: 9783867283212,BookStatus:'in', Hardcover:"images/book1.jpg"}
 {Title:'The Power Of Now',Author:'Eckart Tolle',Published:2004,ISBN: 978-1-57731-480-6 ,BookStatus:'in',Hardcover:"images/book2.jpg"}
 {Title:'The Mind',Author:'John Brockman',Published:2017,ISBN:62025848 BookStatus:'out',Hardcover:"images/book3.jpg"}
 {Title:'The Fourth Agreement',Author:'Miguel Ruiz',Published:1997,ISBN:34987654,BookStatus:'in',Hardcover:"images/book4.jpg"}
 {Title:'Think And Grow Rich',Author:'Napoleon Hill',Published:1937,ISBN:503865591,BookStatus'in':,Hardcover:"images/book5.jpg"}
 
]
function addBook(){

let BookTitle = document.getElementById('myBooks').value;
let BookAuthor = document.getElementById('myBooks').value;
let BookPublished = document.getElementById('myBooks').value;
let BookIsbn = document.getElementById('myBooks').value;
let BookStatus = document.getElementById('myBooks').value;
let BookHardcover = document.getElementById('myBooks').value;

		books.push({
			Title:booksTitle,
			Author:booksAutor,
			Published:booksPublished,
			ISBN:booksIsbn,
			Status:BooksStatus,
			Hardcover:booksHardcover,

	})
		displaybook();
		
}

	function displayBook(){
		document.getElementById('display').innerHTML = '';
		for (var i = 0;i < books.length;  i++) {
	 		document.getElementById('display').innerHTML +=   `<h1>${books[i].Title} written by ${books[i].author} </h1>
	 		<img src="${books[i].hardcover}" />`;
	}

	let books = [];

	function addBook(){
	
	let newBook = document.getElementById('newBook').value;
	
	if(newBook !== ''){
		
		books.push(newBook);
		console.log('books');
		
		document.getElementById('newBook').value = '';

		displayBook();
	}
}

	function displaybook(){
	
	document.getElementById('stockDisplay').innerHTML = 'Stock: ' + books.length; 
	
	document.getElementById('bookDisplay').innerHTML = '';

	for(let i = 0; i < books.length; i++){
		document.getElementById('bookDisplay').innerHTML += `<h4>${book[i]}</h4>
			<input type="button" value="DELETE" onclick="deleteBook(${i})" />
			<hr/>`; 
			
	}
}

	function deleteBook(index){
	
	book.splice(index, 1);
	
	displayBoooks();
}
	function changeButtonInOut(){
		document.getElementById('myButton').innerHTML = changeButtonInOut();
		for (var i = 0;i<books.length;i++) {
			if (books[i] == '') {
				document.getElementById('myButton').innerHTML = 'out';
			} else {
				document.getElementById('myButton').innerHTML = 'in';
			}
		}
	}	
 	
	function sortShoes(){
	shoes.sort();
	displayShoes();

}



		