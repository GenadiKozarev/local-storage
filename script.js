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
    populateList(items, itemsList);
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

addItems.addEventListener('submit', addItem);
