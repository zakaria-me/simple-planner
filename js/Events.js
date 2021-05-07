// Constants for elements
const button = document.getElementById('addParagraphs');
const button2 = document.getElementById('removeParagraphs');
const tableOfTache = document.getElementById('table_taches');
const cellsOfTableTache = tableOfTache.getElementsByTagName('td');
/*
function addParagraphs() {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = 'Hello World';
	this.appendChild(paragraph);
}
function removeParagraphs() {
	this.remove();
}*/
// Add Events
function addEvents() {
	for (const cell of cellsOfTableTache) {
		cell.addEventListener('click', addParagraphs);
	}
}
function removeEvents() {
	for (const cell of cellsOfTableTache) {
		cell.removeEventListener('click', addParagraphs);
		let paragraphs = cell.getElementsByTagName('p');
		for (let i = 0; i < paragraphs.length; ++i) {
			paragraphs[i].addEventListener('click', removeParagraphs);
		}
	}
}
button.addEventListener('click', addEvents);
button2.addEventListener('click', removeEvents);
