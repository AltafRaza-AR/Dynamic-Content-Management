function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemQuantity) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${itemName} (x${itemQuantity})</span>
            <input type="text" class="edit-name" value="${itemName}" style="display:none;">
            <input type="number" class="edit-quantity" value="${itemQuantity}" style="display:none;">
            <button class="edit" onclick="editItem(this)">Edit</button>
            <button class="remove" onclick="removeItem(this)">Remove</button>
        `;
        document.getElementById('shopping-list').appendChild(listItem);
        clearInputs();
    }
}

function editItem(button) {
    const listItem = button.parentElement;
    const nameSpan = listItem.querySelector('span');
    const editName = listItem.querySelector('.edit-name');
    const editQuantity = listItem.querySelector('.edit-quantity');

    if (button.textContent === 'Edit') {
        nameSpan.style.display = 'none';
        editName.style.display = 'inline-block';
        editQuantity.style.display = 'inline-block';
        button.textContent = 'Save';
    } else {
        const newName = editName.value;
        const newQuantity = editQuantity.value;

        nameSpan.textContent = `${newName} (x${newQuantity})`;
        nameSpan.style.display = 'inline';
        editName.style.display = 'none';
        editQuantity.style.display = 'none';
        button.textContent = 'Edit';
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function clearInputs() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}
