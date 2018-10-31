let fruits = ["apple","orange", "kiwi"];
document.getElementById('fruitsH1').innerHTML = fruits;

	console.log(fruits);

function addfruit(){
	document.getElementById('fruitsH1').innerHTML = fruits;
	let newFruit = prompt("please enter new fruit").toLowerCase();
	fruits.push(newFruit);

	fruits.sort();
	document.getElementById('fruitsH1').innerHTML=fruits.join(' with ');
}