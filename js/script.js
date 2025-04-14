const container = document.getElementById('tablePifagor');
const table = document.createElement('table');

for (let i = 0; i <= 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j <= 10; j++) {
    const cell = i === 0 || j === 0 ? document.createElement('th') : document.createElement('td');
    if (i === 0 && j === 0) {
      cell.textContent = '×'; // Верхній лівий кут
    } else if (i === 0) {
      cell.textContent = j; //Заголовок стовпця
    } else if (j === 0) {
      cell.textContent = i; //Заголовок рядка
    } else {
      cell.textContent = i * j; 
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}

container.appendChild(table);