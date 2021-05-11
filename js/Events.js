// Constants for elements
const buttonAddParagraphs = document.getElementById('addParagraphs');
const buttonTacheTerminee = document.getElementById('strikeThroughParagraphs');
const buttonRemoveParagraphs = document.getElementById('removeParagraphs');
const tableOfTache = document.getElementById('table_taches');
const cellsOfTableTache = tableOfTache.getElementsByTagName('td');
/*
function addParagraphs() {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = 'Hello World';
	this.appendChild(paragraph);
}
function strikeThroughParagraphs() {
	this.remove();
}*/
// Add Events
function addParagraphEvents() {
	for (const cell of cellsOfTableTache) {
		cell.addEventListener('click', addParagraphs);
		cell.removeEventListener('click', removeParagraphs);
	}
}
function removeParagraphEvents() {
	for (const cell of cellsOfTableTache) {
		cell.removeEventListener('click', addParagraphs);
		cell.addEventListener('click', removeParagraphs);
	}
}
function strikeThroughEvents() {
	for (const cell of cellsOfTableTache) {
		cell.removeEventListener('click', addParagraphs);
		cell.removeEventListener('click', removeParagraphs);
		let paragraphs = cell.getElementsByTagName('p');
		for (let i = 0; i < paragraphs.length; ++i) {
			paragraphs[i].addEventListener('click', strikeThroughParagraphs);
		}
	}
}
buttonAddParagraphs.addEventListener('click', addParagraphEvents);
buttonTacheTerminee.addEventListener('click', strikeThroughEvents);
buttonRemoveParagraphs.addEventListener('click', removeParagraphEvents);
