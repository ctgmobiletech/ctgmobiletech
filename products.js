const products = [
    // =====================================================
    // 📱 NEW IPHONE
    // =====================================================
    {
        id: 1,
        name: 'iPhone 17 Pro Max',
        cat: 'iPhone',
        type: 'new',
        brand: 'Apple',
        price: 189999,
        oldPrice: 199999,
        img: 'https://i.ibb.co/xWXXt2t/i4.jpg',
        images: [
            'https://i.ibb.co/xWXXt2t/i4.jpg'
        ],
        desc: 'Premium flagship iPhone with powerful performance, advanced camera system and premium design.',
        specs: {
            storage: '256GB',
            ram: '8GB',
            color: 'Natural Titanium',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Official Warranty'
        }
    },

    {
        id: 2,
        name: 'iPhone 16 Pro Max',
        cat: 'iPhone',
        type: 'new',
        brand: 'Apple',
        price: 159999,
        oldPrice: 169999,
        img: 'https://i.ibb.co/LzZ0w3SX/i2.jpg',
        images: [
            'https://i.ibb.co/LzZ0w3SX/i2.jpg'
        ],
        desc: 'Premium iPhone with Pro performance, excellent camera and stunning display.',
        specs: {
            storage: '256GB',
            ram: '8GB',
            color: 'Desert Titanium',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Official Warranty'
        }
    },

    {
        id: 3,
        name: 'iPhone 15 Pro',
        cat: 'iPhone',
        type: 'new',
        brand: 'Apple',
        price: 124999,
        oldPrice: 134999,
        img: 'https://i.ibb.co/zVd2tbcB/i3.jpg',
        images: [
            'https://i.ibb.co/zVd2tbcB/i3.jpg'
        ],
        desc: 'Powerful and stylish iPhone with Pro performance and advanced camera features.',
        specs: {
            storage: '128GB',
            ram: '8GB',
            color: 'Black Titanium',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },
    {
        id: 4,
        name: 'iPhone 17 Pro',
        cat: 'iPhone',
        type: 'new',
        brand: 'Apple',
        price: 124999,
        oldPrice: 134999,
        img: 'https://i.ibb.co/zVd2tbcB/i3.jpg',
        images: [
            'https://i.ibb.co/zVd2tbcB/i3.jpg'
        ],
        desc: 'Powerful and stylish iPhone with Pro performance and advanced camera features.',
        specs: {
            storage: '128GB',
            ram: '8GB',
            color: 'Black Titanium',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },

    // =====================================================
    // 🔵 GOOGLE PIXEL
    // =====================================================
    {
        id: 5,
        name: 'Google Pixel 10 Pro XL',
        cat: 'Google Pixel',
        type: 'new',
        brand: 'Google',
        price: 119999,
        oldPrice: 129999,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Premium Google Pixel smartphone with powerful AI features and advanced camera.',
        specs: {
            storage: '256GB',
            ram: '16GB',
            color: 'Obsidian',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },

    {
        id: 6,
        name: 'Google Pixel 9 Pro XL',
        cat: 'Google Pixel',
        type: 'new',
        brand: 'Google',
        price: 99999,
        oldPrice: 109999,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Premium Pixel phone featuring Google AI, excellent camera and smooth performance.',
        specs: {
            storage: '256GB',
            ram: '16GB',
            color: 'Obsidian',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },
    {
        id: 7,
        name: 'Google Pixel 10 Pro XL',
        cat: 'Google Pixel',
        type: 'new',
        brand: 'Google',
        price: 119999,
        oldPrice: 129999,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Premium Google Pixel smartphone with powerful AI features and advanced camera.',
        specs: {
            storage: '256GB',
            ram: '16GB',
            color: 'Obsidian',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },

    {
        id: 8,
        name: 'Google Pixel 9 Pro XL',
        cat: 'Google Pixel',
        type: 'new',
        brand: 'Google',
        price: 99999,
        oldPrice: 109999,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Premium Pixel phone featuring Google AI, excellent camera and smooth performance.',
        specs: {
            storage: '256GB',
            ram: '16GB',
            color: 'Obsidian',
            condition: 'Brand New',
            battery: '100%',
            warranty: 'Warranty Available'
        }
    },


    // =====================================================
    // ♻️ USED IPHONE
    // =====================================================
    {
        id: 9,
        name: 'iPhone 14 Pro Max',
        cat: 'Used Phone',
        type: 'used',
        brand: 'Apple',
        price: 85000,
        oldPrice: 95000,
        img: 'https://i.ibb.co/fP85yFv/i1.jpg',
        images: [
            'https://i.ibb.co/fP85yFv/i1.jpg'
        ],
        desc: 'Used iPhone 14 Pro Max with excellent performance and battery health.',
        specs: {
            storage: '256GB',
            ram: '6GB',
            color: 'Deep Purple',
            condition: 'Very Good',
            battery: '92%',
            warranty: '7 Days Checking Warranty'
        }
    },

    {
        id: 10,
        name: 'iPhone 13 Pro Max',
        cat: 'Used Phone',
        type: 'used',
        brand: 'Apple',
        price: 68000,
        oldPrice: 75000,
        img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Reliable used iPhone with excellent performance and premium camera.',
        specs: {
            storage: '256GB',
            ram: '6GB',
            color: 'Sierra Blue',
            condition: 'Very Good',
            battery: '89%',
            warranty: '7 Days Checking Warranty'
        }
    },

    {
        id: 11,
        name: 'Google Pixel 8 Pro',
        cat: 'Used Phone',
        type: 'used',
        brand: 'Google',
        price: 62000,
        oldPrice: 70000,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Used Google Pixel 8 Pro in very good condition with excellent camera performance.',
        specs: {
            storage: '128GB',
            ram: '12GB',
            color: 'Obsidian',
            condition: 'Very Good',
            battery: '94%',
            warranty: '7 Days Checking Warranty'
        }
    },

    {
        id: 12,
        name: 'Google Pixel 7 Pro',
        cat: 'Used Phone',
        type: 'used',
        brand: 'Google',
        price: 45000,
        oldPrice: 52000,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Used Pixel 7 Pro with smooth performance and excellent camera quality.',
        specs: {
            storage: '128GB',
            ram: '12GB',
            color: 'Hazel',
            condition: 'Good',
            battery: '90%',
            warranty: '7 Days Checking Warranty'
        }
    },

    // =====================================================
    // 🔌 ACCESSORIES
    // =====================================================
    {
        id: 13,
        name: 'Apple 20W USB-C Power Adapter',
        cat: 'Accessories',
        type: 'accessory',
        brand: 'Apple',
        price: 2200,
        oldPrice: 2500,
        img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Original-style fast charging USB-C power adapter for compatible devices.',
        specs: {
            type: '20W Fast Charger',
            connector: 'USB-C',
            condition: 'Brand New',
            warranty: 'Warranty Available'
        }
    },

    {
        id: 14,
        name: 'Premium MagSafe Case',
        cat: 'Accessories',
        type: 'accessory',
        brand: 'Premium',
        price: 850,
        oldPrice: 1200,
        img: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Premium protective phone case with stylish design and MagSafe compatibility.',
        specs: {
            type: 'MagSafe Case',
            material: 'Premium Silicone',
            condition: 'Brand New',
            warranty: 'No Warranty'
        }
    },

    {
        id: 15,
        name: 'Wireless Earbuds',
        cat: 'Accessories',
        type: 'accessory',
        brand: 'Premium',
        price: 1800,
        oldPrice: 2500,
        img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Compact wireless earbuds with clear sound and comfortable fit.',
        specs: {
            type: 'Wireless Earbuds',
            connectivity: 'Bluetooth',
            condition: 'Brand New',
            warranty: '7 Days'
        }
    },
    
    {
        id: 16,
        name: 'Wireless Earbuds',
        cat: 'Accessories',
        type: 'accessory',
        brand: 'Premium',
        price: 1800,
        oldPrice: 2500,
        img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80'
        ],
        desc: 'Compact wireless earbuds with clear sound and comfortable fit.',
        specs: {
            type: 'Wireless Earbuds',
            connectivity: 'Bluetooth',
            condition: 'Brand New',
            warranty: '7 Days'
        }
    }

];


// =====================================================
// 📂 CATEGORIES
// =====================================================
const categories = [
    {
        id: 'iPhone',
        icon: '🍎',
        label: 'iPhone'
    },
    {
        id: 'Google Pixel',
        icon: '🔵',
        label: 'Google Pixel'
    },
    {
        id: 'Used Phone',
        icon: '♻️',
        label: 'Used Phone'
    },
    {
        id: 'Others Phone',
        icon: '📱',
        label: 'Others Phone'
    },
    {
        id: 'Accessories',
        icon: '🔌',
        label: 'Accessories'
    }
];