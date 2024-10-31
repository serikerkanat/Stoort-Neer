// Массивы продуктов
const electronics = [
    { name: 'Диск альбома MÖRRINJÖ', price: 10.99 },
    { name: 'Диск альбома aret utan sommar', price: 12.99 },
    { name: 'Ноты(gp7) альбома MÖRRINJÖ', price: 5.99 },
    { name: 'Ноты(gp7) альбома aret utan sommar', price: 7.99 },
];

const clothing = [
    { name: 'Худи', price: 25.99 },
    { name: 'Шапка', price: 15.99 },
];

const allProducts = [...electronics, ...clothing]; 

// Это наш обработчик событий на кнопках
document.getElementById('show-time').addEventListener('click', () => {
    const timeElement = document.getElementById('time-display');
    timeElement.textContent = new Date().toLocaleTimeString();
});

// Это обработчик клавиатурных событий
const menuItems = document.querySelectorAll('.menu-item');
        let currentIndex = 0;

        function setFocus() {
            menuItems[currentIndex].focus();
            menuItems[currentIndex].classList.add('focused'); 
        }

        function removeFocus() {
            menuItems[currentIndex].classList.remove('focused');
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                removeFocus();
                currentIndex = (currentIndex + 1) % menuItems.length;
                setFocus();
            } else if (event.key === 'ArrowUp') {
                removeFocus();
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                setFocus();
            }
        });

        // Добавляем действия при нажатии на кнопки
        menuItems[0].addEventListener('click', () => {
            alert('Button 1 clicked!'); 
        });

        menuItems[1].addEventListener('click', () => {
            document.getElementById('text-element').textContent = 'Text has been changed!';
        });

        menuItems[2].addEventListener('click', () => {
            document.body.classList.toggle('dark-mode'); 
        });

        
        setFocus();

// Свитчи
function filterProducts(category) {
    switch (category) {
        case 'electronics':
            displayProducts(electronics);
            break;
        case 'clothing':
            displayProducts(clothing);
            break;
        default:
            displayProducts(allProducts);
    }
}


function displayProducts(products) {
    const productContainer = document.getElementById('product-list'); 
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        productContainer.appendChild(productElement); 
    });
}
