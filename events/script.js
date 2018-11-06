//function changeButtonText(){
document.getElementById('myButton').addEventListener('click', changeOnOff);
document.getElementById('myBox').addEventListener('mouseover', changeBoxColor);
document.getElementById('myBox').addEventListener('mouseleave', changeBoxColor);

let button = document.getElementById('myButton');


function changeOnOff(){
	if(button.value=="OFF"){
		button.value="ON";
	}else{
		button.value="OFF";
	}
}

function changeBoxColor(){
	let myBox = document.getElementById('myBox');
	if (button.value=="ON"){
		if( myBox.style.backgroundColor === 'green' ){
			myBox.style.backgroundColor = 'red';
		} else {
			myBox.style.backgroundColor = 'green';
			}
	}else {
	myBox.style.backgroundColor = 'red';

}
}



	
	//document.getElementById('myButton').addEventListener('click' , changeButtonText);



	// let boxBackgroundColor = 'coral';// || violet && button.value;
	// if (button.value==='ON') {
	// 	boxBackgroundColor= 'coral';
	// } else {
	// 	boxBackgroundColor='violet'
	// }
	
	// function changeBoxBackgroundColor(){


	// let box = document.getElementById('myBox').style.backgroundColor =+ 'value';

	// document.getElementById('myBox').addEventListener('',changeBoxBackgroundColor);
	
