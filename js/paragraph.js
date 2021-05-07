function addParagraphs() {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = 'Hello World';
	this.appendChild(paragraph);
}
function removeParagraphs() {
	this.remove();
}
