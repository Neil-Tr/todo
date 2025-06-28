function loadMenu() {
    const cont = document.getElementById("content");
    const menu = document.createElement('div');
    menu.className = 'menu';
    const menuText = document.createElement('h1');
    menuText.textContent="Menu";
    menuText.className = "menu-text";
    cont.appendChild(menuText);

    const menuItems = [
        {
            type: 'Classic Glazed',
            desc: 'Light, fluffy, and perfectly glazed',
            price: '$3.00',
        },
        {
            type: 'Choco-Lot O\' Love',
            desc: 'Rich chocolate doughnut, chocolate glaze, sprinkles',
            price: '$3.50',
        },
        {
            type: 'Berry Happy',
            desc: 'Filled with mixed berry jam, topped with pink icing',
            price: '$3.75',
        },
        {
            type: 'Maple Bacon Bliss',
            desc: 'Maple-glazed, topped with crispy bacon bits',
            price: '$4.00',
        },
        {
            type: 'Cookie Monster Crunch',
            desc: 'Cookies & cream filling, cookie crumble topping',
            price: '$4.00',
        },
    ]

    menuItems.forEach(item => {
        const type = document.createElement('p');
        type.textContent = item.type;
        const desc = document.createElement('p');
        desc.textContent = item.desc;
        const price = document.createElement('p');
        price.textContent = item.price;
        menu.appendChild(type);
        menu.appendChild(desc);
        menu.appendChild(price);
    })

    cont.appendChild(menu);

}

export default loadMenu;