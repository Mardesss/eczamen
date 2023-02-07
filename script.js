const idElem = ['body', 'newWindow', 'quit', 'name', 'number', 'save'];
const [body, newWindow, quit, firstName, phone, save] = idElem.map(id => document.getElementById(id));

const data = [
	['Colette Kelley', '012 435 45 67'],
	['Ruby-Rose Lennon', '012 647 34 24'],
	['Leanne Gibbons', '012 879 78 45'],
	['Rumaisa Peel', '012 456 64 67'],
	['Gene Medrano', '012 245 47 89'],
	['Sheridan Tucker', '012 345 85 90'],
	['Christina Mack', '012 123 36 46'],
	['Everly Moses', '012 678 99 74'],
	['Kara Feeney', '012 456 96 53'],
	['Cameron Rennie', '012 967 47 85'],
]; 

const createTableContent = arr => {
	return arr.reduce((s, [n, p], i) => {
		return s += `<tr>
			<td>${++i}</td>
			<td>${n}</td>
			<td>${p}</td>
			<td><button class="penButton">✏️</button></td>			
		</tr>`;
	}, '');
};

body.innerHTML = createTableContent(data);

const divEdit = e => {
    if(!e.target.classList.contains('penButton')) return;
	let tr = e.target.closest('tr');
    firstName.value = tr.cells[1].innerText;
	phone.value = tr.cells[2].innerText;
    save.dataset.row = tr.rowIndex - 1;
    newWindow.style.display = 'block';
}

const saveValue = e => {
	let tr = body.rows[e.target.dataset.row];
	tr.cells[1].innerText = firstName.value;
	tr.cells[2].innerText = phone.value;
	newWindow.style.display = 'none';
};

const quitEdit = () => newWindow.style.display = 'none';



quit.addEventListener('click', quitEdit);
body.addEventListener('click', divEdit);
save.addEventListener('click', saveValue);