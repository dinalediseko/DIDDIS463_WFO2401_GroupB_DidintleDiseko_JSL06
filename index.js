// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 49.99 },
        { name: "Bruschetta", price: 52.00 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 149.99 },
        { name: "Spaghetti Carbonara", price: 208.00 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 89.99 },
        { name: "Cheesecake", price: 75.00 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('menu-category');
            categoryElement.innerHTML = `<h3>${category}</h3>`;
            
            const itemList = document.createElement('ul');
            itemList.classList.add('menu-item-list');
            
            menu[category].forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('menu-item');
                listItem.textContent = item.name;
                listItem.setAttribute('data-price', item.price.toFixed(2));
                listItem.addEventListener('click', () => addToOrder(item.name, item.price));
                
                itemList.appendChild(listItem);
            });
            
            menuContainer.appendChild(categoryElement);
            menuContainer.appendChild(itemList);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    const orderList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = itemName;

    orderList.appendChild(listItem);

    let totalPrice = parseFloat(orderTotal.textContent);
    totalPrice += itemPrice;
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
