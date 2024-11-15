const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const input = this.querySelector('[name=item]');
    const title = input.value;
    const item = {
        title,
        done: false,
    };
    items.push(item);
    // empties the text input value
    this.reset();
}

addItems.addEventListener('submit', addItem);
