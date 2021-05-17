function addParagraphs() {
	let div = document.createElement('div');
	let paragraph = document.createElement('p');
	let btn = document.createElement('button');
	let btnEdit = document.createElement('button');
	btnEdit.type = 'button';
	btnEdit.innerText - 'Modifier';
	btn.type = 'button';
	btn.innerText = 'Supprimer';
	paragraph.className = 'paragraph-to-do';
	paragraph.innerText = prompt('Contenu du paragraphe:');
	if (paragraph.innerText != '') {
		div.appendChild(paragraph);
		div.appendChild(btn);
		this.appendChild(div);
		btn.addEventListener('click', function () {
			this.parentElement.remove();
		});
	}
}
function strikeThroughParagraphs() {
	if (this.className == 'paragraph-done') {
		this.className = 'paragraph-to-do';
	} else if (this.className == 'paragraph-to-do') {
		this.className = 'paragraph-done';
	}
}
