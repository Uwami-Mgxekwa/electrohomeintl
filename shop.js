// ================================
// Product Database
// ================================
const products = [
    // Washing Machines
    {
        id: 1,
        name: "Samsung Front Load Washer",
        category: "washing-machines",
        condition: "new",
        price: 8999,
        description: "8kg capacity, energy efficient, digital display",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 2,
        name: "LG Top Load Washer",
        category: "washing-machines",
        condition: "second-hand",
        price: 4500,
        description: "12kg capacity, excellent condition, fully functional",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 3,
        name: "Defy Twin Tub Washer",
        category: "washing-machines",
        condition: "second-hand",
        price: 2800,
        description: "6kg capacity, reliable, great for apartments",
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 4,
        name: "Bosch Automatic Washer",
        category: "washing-machines",
        condition: "new",
        price: 12500,
        description: "9kg capacity, smart features, premium quality",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&auto=format"
    },

    // Refrigerators
    {
        id: 5,
        name: "Hisense Double Door Fridge",
        category: "refrigerators",
        condition: "new",
        price: 6999,
        description: "450L capacity, frost-free, energy saving",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 6,
        name: "Samsung Side-by-Side Fridge",
        category: "refrigerators",
        condition: "new",
        price: 18999,
        description: "600L capacity, water dispenser, ice maker",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 7,
        name: "Defy Single Door Fridge",
        category: "refrigerators",
        condition: "second-hand",
        price: 3500,
        description: "250L capacity, good working condition",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop&auto=format&sat=-20"
    },
    {
        id: 8,
        name: "LG French Door Fridge",
        category: "refrigerators",
        condition: "second-hand",
        price: 11500,
        description: "520L capacity, excellent condition, modern design",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&auto=format&hue=180"
    },

    // Ovens & Stoves
    {
        id: 9,
        name: "Defy 4-Plate Stove",
        category: "ovens",
        condition: "new",
        price: 5499,
        description: "Electric, built-in oven, grill function",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 10,
        name: "Bosch Gas Stove",
        category: "ovens",
        condition: "new",
        price: 9999,
        description: "5 burners, safety features, premium finish",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&sat=20"
    },
    {
        id: 11,
        name: "Tedelex 2-Plate Stove",
        category: "ovens",
        condition: "second-hand",
        price: 1800,
        description: "Compact, portable, perfect for small kitchens",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&brightness=-10"
    },
    {
        id: 12,
        name: "Smeg Built-in Oven",
        category: "ovens",
        condition: "second-hand",
        price: 7500,
        description: "Multifunction, fan-forced, excellent condition",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&hue=30"
    },

    // Dishwashers
    {
        id: 13,
        name: "Bosch Dishwasher",
        category: "dishwashers",
        condition: "new",
        price: 11999,
        description: "14 place settings, quiet operation, eco mode",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&hue=60"
    },
    {
        id: 14,
        name: "Samsung Dishwasher",
        category: "dishwashers",
        condition: "second-hand",
        price: 5500,
        description: "12 place settings, multiple wash cycles",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&hue=120"
    },
    {
        id: 15,
        name: "Defy Compact Dishwasher",
        category: "dishwashers",
        condition: "new",
        price: 7999,
        description: "8 place settings, space-saving design",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&brightness=10"
    },

    // Microwaves
    {
        id: 16,
        name: "LG Microwave Oven",
        category: "microwaves",
        condition: "new",
        price: 2499,
        description: "28L capacity, grill function, digital controls",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 17,
        name: "Samsung Microwave",
        category: "microwaves",
        condition: "second-hand",
        price: 1200,
        description: "23L capacity, excellent working order",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop&auto=format&sat=-10"
    },
    {
        id: 18,
        name: "Defy Solo Microwave",
        category: "microwaves",
        condition: "new",
        price: 1899,
        description: "20L capacity, compact, easy to use",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop&auto=format&hue=30"
    },
    {
        id: 19,
        name: "Bosch Convection Microwave",
        category: "microwaves",
        condition: "new",
        price: 4999,
        description: "32L capacity, convection + grill, premium",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop&auto=format&brightness=15"
    },

    // Small Appliances
    {
        id: 20,
        name: "Russell Hobbs Kettle",
        category: "small-appliances",
        condition: "new",
        price: 399,
        description: "1.7L, stainless steel, rapid boil",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 21,
        name: "Philips Toaster",
        category: "small-appliances",
        condition: "new",
        price: 599,
        description: "2-slice, variable browning, modern design",
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 22,
        name: "Sunbeam Blender",
        category: "small-appliances",
        condition: "second-hand",
        price: 450,
        description: "1.5L jug, multiple speeds, good condition",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 23,
        name: "Tefal Air Fryer",
        category: "small-appliances",
        condition: "new",
        price: 2299,
        description: "4.2L capacity, healthy cooking, timer function",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&hue=200"
    },
    {
        id: 24,
        name: "Mellerware Iron",
        category: "small-appliances",
        condition: "second-hand",
        price: 250,
        description: "Steam iron, ceramic soleplate, works perfectly",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&hue=300"
    },
    {
        id: 25,
        name: "Kenwood Food Processor",
        category: "small-appliances",
        condition: "new",
        price: 3499,
        description: "Multiple attachments, powerful motor",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&hue=270"
    },
    {
        id: 26,
        name: "Breville Coffee Maker",
        category: "small-appliances",
        condition: "second-hand",
        price: 1100,
        description: "12-cup capacity, programmable, excellent condition",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 27,
        name: "Salton Slow Cooker",
        category: "small-appliances",
        condition: "new",
        price: 899,
        description: "5L capacity, 3 heat settings, convenient",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format&hue=90"
    }
];

// ================================
// Global Variables
// ================================
let cart = JSON.parse(localStorage.getItem('electrohome_cart')) || [];
let filteredProducts = [...products];

// ================================
// DOM Elements
// ================================
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const conditionFilter = document.getElementById('conditionFilter');
const sortFilter = document.getElementById('sortFilter');
const noResults = document.getElementById('noResults');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const header = document.getElementById('header');

// ================================
// Initialize
// ================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    
    // Enhanced image loading for product images
    setupImageLoading();
    
    // Event Listeners
    cartIcon.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', handleCheckout);
    searchInput.addEventListener('input', handleFilters);
    categoryFilter.addEventListener('change', handleFilters);
    conditionFilter.addEventListener('change', handleFilters);
    sortFilter.addEventListener('change', handleFilters);
    
    // Mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Scroll effects
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
            scrollTopBtn.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ================================
// Enhanced Image Loading
// ================================
function setupImageLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px 0px',
            threshold: 0.01
        });
        
        // Re-observe images when products are rendered
        const observeImages = () => {
            document.querySelectorAll('.product-image[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        };
        
        // Initial observation
        observeImages();
        
        // Re-observe after filtering
        const originalRenderProducts = renderProducts;
        renderProducts = function() {
            originalRenderProducts.call(this);
            setTimeout(observeImages, 100);
        };
    }
}

// ================================
// Render Products
// ================================
function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" decoding="async" width="400" height="300">
                <span class="product-badge ${product.condition === 'new' ? 'badge-new' : 'badge-second-hand'}">
                    ${product.condition === 'new' ? 'New' : 'Second-Hand'}
                </span>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">R ${product.price.toLocaleString()}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ================================
// Cart Functions
// ================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        showNotification('Product already in cart', 'info');
        openCart();
        return;
    }
    
    cart.push(product);
    saveCart();
    updateCart();
    showNotification('Added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
    showNotification('Removed from cart', 'info');
}

function updateCart() {
    // Update cart count
    cartCount.textContent = cart.length;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
        totalAmount.textContent = 'R 0.00';
        checkoutBtn.disabled = true;
        return;
    }
    
    checkoutBtn.disabled = false;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-condition">${item.condition === 'new' ? 'New' : 'Second-Hand'}</div>
                <div class="cart-item-price">R ${item.price.toLocaleString()}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmount.textContent = `R ${total.toLocaleString()}`;
}

function saveCart() {
    localStorage.setItem('electrohome_cart', JSON.stringify(cart));
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Checkout (WhatsApp)
// ================================
function handleCheckout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    let message = '*New Order from Website*\n\n';
    message += '*Products:*\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Condition: ${item.condition === 'new' ? 'New' : 'Second-Hand'}\n`;
        message += `   Price: R ${item.price.toLocaleString()}\n\n`;
    });
    
    message += `*Total Amount: R ${total.toLocaleString()}*\n\n`;
    message += 'Please confirm availability and provide delivery/collection details.';
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '27818981775';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    showNotification('Redirecting to WhatsApp...', 'success');
}

// ================================
// Filter and Search
// ================================
function handleFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const condition = conditionFilter.value;
    const sort = sortFilter.value;
    
    // Filter products
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        const matchesCondition = condition === 'all' || product.condition === condition;
        
        return matchesSearch && matchesCategory && matchesCondition;
    });
    
    // Sort products
    switch(sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    renderProducts();
}

// ================================
// Helper Functions
// ================================
function getCategoryName(category) {
    const categories = {
        'washing-machines': 'Washing Machines',
        'refrigerators': 'Refrigerators',
        'ovens': 'Ovens & Stoves',
        'dishwashers': 'Dishwashers',
        'microwaves': 'Microwaves',
        'small-appliances': 'Small Appliances'
    };
    return categories[category] || category;
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const colors = {
        success: '#00875A',
        info: '#0052CC',
        warning: '#FF8B00',
        error: '#CC0000'
    };
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: colors[type] || colors.info,
        color: '#FFFFFF',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0, 82, 204, 0.2)',
        zIndex: '9999',
        fontWeight: '500',
        animation: 'slideIn 0.3s ease',
        maxWidth: '90%',
        width: 'auto'
    });
    
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ================================
// Close mobile menu on link click
// ================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ================================
// Console Info
// ================================
console.log('%cElectroHome International Shop', 'color: #0052CC; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed by brelinx.com', 'color: #003D99; font-size: 12px;');
console.log(`%c${products.length} products loaded`, 'color: #00875A; font-size: 12px;');