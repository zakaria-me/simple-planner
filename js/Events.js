// Constants for elements
const buttonAddParagraphs = document.getElementById('addParagraphs');
const buttonTacheTerminee = document.getElementById('strikeThroughParagraphs');
const buttonRemoveEvents = document.getElementById('removeEvents');
const tableOfTache = document.getElementById('table_taches');
const cellsOfTableTache = tableOfTache.getElementsByTagName('td');
// Add Events
function addParagraphEvents() {
	for (const cell of cellsOfTableTache) {
		cell.addEventListener('click', addParagraphs);
		//cell.removeEventListener('click', removeParagraphs);
	}
}
function strikeThroughEvents() {
	for (const cell of cellsOfTableTache) {
		cell.removeEventListener('click', addParagraphs);
		//cell.removeEventListener('click', removeParagraphs);
		let paragraphs = cell.getElementsByTagName('p');
		for (let i = 0; i < paragraphs.length; ++i) {
			paragraphs[i].addEventListener('click', strikeThroughParagraphs);
		}
	}
}
function removeEvents() {
	for (const cell of cellsOfTableTache) {
		cell.removeEventListener('click', addParagraphs);
		let paragraphs = cell.getElementsByTagName('p');
		for (let i = 0; i < paragraphs.length; ++i) {
			paragraphs[i].removeEventListener('click', strikeThroughParagraphs);
		}
	}
}
buttonAddParagraphs.addEventListener('click', addParagraphEvents);
buttonTacheTerminee.addEventListener('click', strikeThroughEvents);
buttonRemoveEvents.addEventListener('click', removeEvents);
