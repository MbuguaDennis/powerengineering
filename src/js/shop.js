const products = [
    { id: 1, category: 'Generators', src: '/src/assets/images/generators/generator1.jpg' },
    { id: 2, category: 'Generators', src: '/src/assets/images/generators/generator2.jpg' },
    { id: 3, category: 'Generators', src: '/src/assets/images/generators/generator3.jpg' },
    { id: 4, category: 'Generators', src: '/src/assets/images/generators/generator4.jpg' },
    { id: 5, category: 'Generators', src: '/src/assets/images/generators/generator5.jpg' },
    { id: 6, category: 'Generators', src: '/src/assets/images/generators/generator6.jpg' },
    { id: 7, category: 'Generators', src: '/src/assets/images/generators/generator7.jpg' },
    { id: 8, category: 'Generators', src: '/src/assets/images/generators/generator8.jpg' },
    { id: 9, category: 'Generators', src: '/src/assets/images/generators/yellow_generator.jpg' },
];

const panels = [
    { id: 1, category: 'Panels', src: '/src/assets/images/panels/panel1.jpg' },
    { id: 2, category: 'Panels', src: '/src/assets/images/panels/panel2.jpg' },
    { id: 3, category: 'Panels', src: '/src/assets/images/panels/panel3.jpg' },
    { id: 4, category: 'Panels', src: '/src/assets/images/panels/panel4.jpg' },
];

const itemsPerPage = 2;
let currentPage = 1;

function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = items.slice(start, end);

    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', item.src);
        imgElement.setAttribute('alt', item.category);
        imgElement.onerror = function() {
            this.src = 'path-to-placeholder-image';
        };
        itemElement.appendChild(imgElement);

        const pElement = document.createElement('p');
        pElement.textContent = item.category;
        itemElement.appendChild(pElement);

        container.appendChild(itemElement);
    });

    document.getElementById('page-num').textContent = currentPage;
    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = end >= items.length;
}

document.getElementById('prev').addEventListener('click', () => {
    currentPage--;
    renderItems(products, 'products');
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    renderItems(products, 'products');
});

document.getElementById('prev-panels').addEventListener('click', () => {
    currentPage--;
    renderItems(panels, 'panels');
});

document.getElementById('next-panels').addEventListener('click', () => {
    currentPage++;
    renderItems(panels, 'panels');
});

// Initial render for both products and panels
renderItems(products, 'products');
renderItems(panels, 'panels');
