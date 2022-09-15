export function renderCandy(candy) {
    const li = document.createElement('li');
    li.classList.add('candy-item');

    const headerEL = document.createElement('h2');
    headerEL.textContent = candy.name;

    const pEl = document.createElement('p');
    pEl.textContent = candy.flavor + ' ' + candy.type;

    li.append(headerEL, pEl);

    return li;
}
