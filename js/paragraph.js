function addParagraphs() {
	let paragraph = document.createElement('p');
	paragraph.className = 'paragraph-to-do';
	paragraph.innerHTML = 'Hello World';
	this.appendChild(paragraph);
}
function removeParagraphs() {
	if (this.className == 'paragraph-done') {
		this.className = 'paragraph-to-do';
	} else if (this.className == 'paragraph-to-do') {
		this.className = 'paragraph-done';
	}
}
