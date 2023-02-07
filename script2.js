const idElem = ['body', 'newWindow', 'quit', 'name', 'number', 'save'];
const [body, newWindow, quit, firstName, phone, save] = idElem.map(id => document.getElementById(id));

const data2 = [
	['Colette Kelley', 'JS Part 1','12.01.2019'],
	['Ruby-Rose Lennon', 'JS Part 2','12.01.2019'],
	['Leanne Gibbons', 'HTML+CSS book','12.01.2019'],
	['Rumaisa Peel', 'Bootstrap','12.01.2019'],
	['Gene Medrano', 'SQL Part 1','12.01.2019'],
	['Sheridan Tucker', 'SQL Part 2','12.01.2019'],
	['Christina Mack', 'SQL Part 3','12.01.2019'],
	['Everly Moses', 'PHP for beginner','12.01.2019'],
	['Kara Feeney', 'C# for beginner','12.01.2019'],
	['Cameron Rennie', 'C++ for beginner','12.01.2019'],
]

const createTableContent = arr => {
	return arr.reduce((s, [n,g, p], i) => {
		return s += `<tr>
			<td>${++i}</td>
			<td>${n}</td>
            <td>${g}</td>
			<td>${p}</td>
			<td><button class="penButton">🔙</button></td>			
		</tr>`;
	}, '');
};

body.innerHTML = createTableContent(data2);


