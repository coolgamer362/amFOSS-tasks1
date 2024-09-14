const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[name="command"]');
let cart = [];
let products = [];

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        handleInput(command);
    }
});

async function handleInput(command) {
    const [action, ...args] = command.split(' ');

    switch(action.toLowerCase()) {
        case 'help':
            viewCommand();
            break;
        case 'list':
            await listProducts();
            break;
        case 'details':
            if (args.length > 0) {
                showProductDetails(args[0]);
            } else {
                terminalOutput.innerHTML += 'Please provide a product ID.\n';
            }
            break;
        case 'add':
            if (args.length > 0) {
                addToCart(args[0]);
            } else {
                terminalOutput.innerHTML += 'Please provide a product ID.\n';
            }
            break;
        case 'remove':
            if (args.length > 0) {
                removeFromCart(args[0]);
            } else {
                terminalOutput.innerHTML += 'Please provide a product ID.\n';
            }
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            viewCart(true);
            break;
        case 'clear':
            terminalOutput.innerHTML = '';
            break;
        case 'search':
            if (args.length > 0) {
                searchProducts(args.join(' '));
            } else {
                terminalOutput.innerHTML += 'Please provide a product name to search.\n';
            }
            break;
        case 'sort':
            if (args.length > 0) {
                sortProducts(args[0]);
            } else {
                terminalOutput.innerHTML += 'Please provide a sorting criteria (price/name).\n';
            }
            break;
        default:
            terminalOutput.innerHTML += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

function viewCommand() {
    terminalOutput.innerHTML += `
        Available Commands:
        help - Show available commands
        list - List all products
        details <product_id> - Show detalis of a product
        add <product_id> - Add a product to the cart
        remove <product_id> - Remove a product from the cart
        cart - View the current items in your cart
        buy - Proceed to checkout
        clear - Clear the terminal screen
        search <product_name> - Search for a product by name
        sort <price/name> - Sort the products by priice or name\n`;
}

async function listProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
        const catalog = document.querySelector('.product-catalog');

        catalog.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="width: 100%; height: auto; border-radius: 5px; margin-bottom: 10px;">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
                <p>Product ID: ${product.id}</p>
            `;
            catalog.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        document.querySelector('.product-catalog').innerHTML = 'Failed to load products.';
    }
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        terminalOutput.innerHTML += `
            Product ID: ${product.id}
            Title: ${product.title}
            Price: $${product.price}
            Description: ${product.description}
            Image: <img src="${product.image}" alt="${product.title}" style="width: 100px; height: auto;">\n`;
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        if (!cart.includes(productId)) {
            cart.push(productId);
            terminalOutput.innerHTML += `Added product ID ${productId} to cart.\n`;
        } else {
            terminalOutput.innerHTML += `Product ID ${productId} is already in the cart.\n`;
        }
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

function removeFromCart(productId) {
    const index = cart.indexOf(parseInt(productId));
    if (index !== -1) {
        cart.splice(index, 1);
        terminalOutput.innerHTML += `Removed product ID ${productId} from cart.\n`;
    } else {
        terminalOutput.innerHTML += `Product ID ${productId} is not in the cart.\n`;
    }
}

function viewCart(showCheckout = false) {
    if (cart.length === 0) {
        terminalOutput.innerHTML += 'Your cart is empty.\n';
        return;
    }
    
    let totalPrice = 0;
    const cartProducts = products.filter(p => cart.includes(p.id));
    
    terminalOutput.innerHTML += 'Cart Contents:\n';
    cartProducts.forEach(product => {
        terminalOutput.innerHTML += `
            Product ID: ${product.id}
            Title: ${product.title}
            Price: $${product.price}\n`;
        totalPrice += product.price;
    });
    
    terminalOutput.innerHTML += `Total Price: $${totalPrice}\n`;
    
    if (showCheckout) {
        
        window.location.href = 'checkout.html';
    }
}

function searchProducts(query) {
    const results = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    
    if (results.length > 0) {
        terminalOutput.innerHTML += 'Search Results:\n';
        results.forEach(product => {
            terminalOutput.innerHTML += `
                Product ID: ${product.id}
                Title: ${product.title}
                Price: $${product.price}\n`;
        });
    } else {
        terminalOutput.innerHTML += 'No products found.\n';
    }
}

function sortProducts(criteria) {
    if (criteria === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'name') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        terminalOutput.innerHTML += 'Invalid sort criteria. Use "price" or "name".\n';
        return;
    }
    terminalOutput.innerHTML += 'Products sorted.\n';
    listProducts();
}

