const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// load from localStorage
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const input = this.querySelector('[name=item]');
    // no empty strings allowed
    if (!input.value.trim()) return;
    const title = input.value.trim();
    const item = {
        title,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    // save in localStorage
    localStorage.setItem('items', JSON.stringify(items));
    // empties the text input value
    this.reset();
}

const populateList = (plates = [], platesList) => {
    platesList.innerHTML = plates
        .map((plate, index) => {
            return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${
                plate.done ? 'checked' : ''
            } />
                <label for="item${index}">${plate.title}</label>
            </li>
        `;
        })
        .join('');
};

const toggleDone = e => {
    // skip targets that are not an input
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    // check/uncheck
    items[index].done = !items[index].done;
    // save to localStorage in order to persist the 'done' state of an item
    localStorage.setItem('items', JSON.stringify(items));
    // update list
    populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
