let submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click',PostDt);
FetchData();
function FetchData() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
		let dt = JSON.parse(this.responseText);
			let responseDiv = document.getElementById('responseDiv');
		let dynmicContols = '';
		dt.forEach((i) => { let newDiv = document.createElement('div'); 
		newDiv.innerText =  i.title; responseDiv.appendChild(newDiv); console.log('10');});
		console.log(dynmicContols);
}

	}
	request.open('GET','https://jsonplaceholder.typicode.com/todos/');
	request.send();
}

function PostDt() {
let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
		let dt = JSON.parse(this.responseText);
			let responseDiv = document.getElementById('responseDiv');
		let dynmicContols = '';
		dt.forEach((i) => { let newDiv = document.createElement('div'); 
		newDiv.innerText =  i.title; responseDiv.appendChild(newDiv); console.log('10');});
		console.log(dynmicContols);
}

	}
	request.open('POST','https://jsonplaceholder.typicode.com/todos/',{ body: { title: document.getElementById('dt1').value} });
	request.send();
}