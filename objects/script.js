var library = [

  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },//name:"test1",ISBN:1234,image:"URL:" 

  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },

  { author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }

];
	for(let i= 0;i < library.length;i++){
		if (library[i].readingStatus==true){

			document.getElementById("myLibrary").innerHTML +='already read ' +library[i].title+' by '+library[i].author+".<br>";

		}else if(library[i].readingStatus==false){
	    	document.getElementById("myLibrary").innerHTML += 'you still need to read' +library[i].title+ ' by '+ library[i].author;
	    }
	}

