document.addEventListener("DOMContentLoaded", function() {
    const name = prompt("Введіть ваше ім'я:");
    const profession = prompt("Введіть вашу професію:");
    const phone = prompt("Введіть ваш телефон:");

    const table = document.getElementById('cards-table');
    const rows = 12;
    const cols = 3;

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerHTML = `
                <div class="card">
                    <div class="name">${name}</div>
                    <div class="profession">${profession}</div>
                    <div class="phone">${phone}</div>
                </div>
            `;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
