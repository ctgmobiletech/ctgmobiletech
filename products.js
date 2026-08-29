const products = [
    // =====================================================
    // 📱 Pre-owned Phones
    // =====================================================
    {
        id: 1,
        name: 'iPhone 12 Pro',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-12-pro.jpg',
        images: [
            'images/products/iphone-12-pro.jpg',
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256GB',
            variant: 'Japan',
            color: 'Sierra Blue',
            battery: 'BH-87%',
            warranty: '14 Day'
        }
    },
    // 🔀 একই ফোনের একাধিক ইউনিট (আলাদা storage/color/variant) এখানে
    // একটাই প্রোডাক্টে "/" দিয়ে জোড়া দেওয়া হলো, যাতে প্রোডাক্ট সংখ্যা কমে।
    {
        id: 2,
        name: 'iPhone 14 Pro Max',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-14-pro-max-1.jpg',
        images: [
            'images/products/iphone-14-pro-max-1.jpg',
            'images/products/iphone-14-pro-max-2.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply). Storage, colour and battery health vary by the unit currently in stock — message us to confirm the exact specs and price.',
        specs: {
            storage: '128GB/256GB/512GB',
            color: 'Gold/Purple',
            variant: 'TDRA, YC/A, ZPA/Singapore, ZA/A, AA/A',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    {
        id: 4,
        name: 'iPhone 14',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-14-1.jpg',
        images: [
            'images/products/iphone-14-1.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '128gb',
            variant: 'China',
            color: 'White',
            battery: 'BH-88%',
            warranty: '14 Day'
        }
    },
    {
        id: 8,
        name: 'iPhone 15 Pro',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-15-pro-1.jpg',
        images: [
            'images/products/iphone-15-pro-1.jpg',
            'images/products/iphone-15-pro-2.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply). Colour and battery health vary by the unit currently in stock — message us to confirm the exact specs and price.',
        specs: {
            storage: '256GB',
            color: 'White/Sierra Blue',
            variant: 'ZPA/Singapore, LLA',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    {
        id: 10,
        name: 'iPhone 15 Pro Max',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-15-pro-max.jpg',
        images: [
            'images/products/iphone-15-pro-max.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            variant: 'TDRA',
            color: 'Natural Titanium',
            box: 'Yes',
            battery: 'BH-86%',
            warranty: '14 Day'
        }
    },
    {
        id: 11,
        name: 'iPhone 15 Plus',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-15-plus.jpg',
        images: [
            'images/products/iphone-15-plus.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '128gb',
            variant: 'China',
            color: 'Paste',
            box: 'Yes',
            battery: 'BH-88%',
            warranty: '14 Day'
        }
    },
    {
        id: 12,
        name: 'iPhone 16 Pro Max',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-16-pro-max-1.jpg',
        images: [
            'images/products/iphone-16-pro-max-1.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply). Battery health varies by the unit currently in stock — message us to confirm the exact specs and price.',
        specs: {
            storage: '256gb',
            color: 'Desert Titanium',
            variant: 'Japan, AE/A',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    {
        id: 14,
        name: 'iPhone 16 Pro',
        cat: 'Pre-owned Phones',
        img: 'images/products/iphone-16-pro-1.jpg',
        images: [
            'images/products/iphone-16-pro-1.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            variant: 'LLA',
            color: 'Titanium Black',
            box: 'Yes',
            battery: 'BH-90%',
            warranty: '14 Day'
        }
    },
    {
        id: 15,
        name: 'Vivo V30 Pro',
        cat: 'Pre-owned Phones',
        img: 'images/products/vivo-v30-pro.jpg',
        images: [
            'images/products/vivo-v30-pro.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            ram: '8GB',
            color: 'Volcanic Black',
            battery: '5000 MAH',
            warranty: '14 Day'
        }
    },
    {
        id: 16,
        name: 'Huawei Pura 70',
        cat: 'Pre-owned Phones',
        img: 'images/products/huawei-pura-70.jpg',
        images: [
            'images/products/huawei-pura-70.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '512gb',
            ram: '12gb',
            color: 'Black',
            battery: 'BH-98%',
            warranty: '14 Day'
        }
    },
    {
        id: 17,
        name: 'Redmi Note12',
        cat: 'Pre-owned Phones',
        img: 'images/products/redmi-note-12.jpg',
        images: [
            'images/products/redmi-note-12.jpg'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            ram: '8gb',
            color: 'Orange',
            box: 'Yes',
            battery: '5000mah',
            warranty: '14 Day'
        }
    },
    {
        id: 18,
        name: 'iPhone 12 Pro Max',
        cat: 'Pre-owned Phones',
        img: 'images/products/Iphone 12 Pro Max.jfif',
        images: [
            'images/products/Iphone 12 Pro Max.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            variant: 'ZAA',
            color: 'Black',
            battery: 'BH-81%',
            warranty: '14 Day'
        }
    },
    {
        id: 19,
        name: 'iPhone 17 Pro',
        cat: 'Pre-owned Phones',
        img: 'images/products/Iphone 17 Pro.jfif',
        images: [
            'images/products/Iphone 17 Pro.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            variant: 'China Dual Sim',
            color: 'White',
            box: 'Yes',
            battery: 'BH-91%',
            warranty: '14 Day'
        }
    },
    {
        id: 20,
        name: 'Nord CE5',
        cat: 'Pre-owned Phones',
        img: 'images/products/Nord CE5.jfif',
        images: [
            'images/products/Nord CE5.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            ram: '8gb',
            color: 'Black',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    {
        id: 21,
        name: 'Pixel 7',
        cat: 'Pre-owned Phones',
        img: 'images/products/Pixel 7.jfif',
        images: [
            'images/products/Pixel 7.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '128gb',
            variant: 'Japan',
            color: 'Yellow',
            warranty: '14 Day'
        }
    },
    {
        id: 22,
        name: 'iPhone 16',
        cat: 'Pre-owned Phones',
        img: 'images/products/Iphone 16.jfif',
        images: [
            'images/products/Iphone 16.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '128gb',
            variant: 'Indian',
            color: 'Black',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    {
        id: 23,
        name: 'Samsung Galaxy S24 Ultra',
        cat: 'Pre-owned Phones',
        img: 'images/products/Samsung S-24 Ultra.jfif',
        images: [
            'images/products/Samsung S-24 Ultra.jfif'
        ],
        desc: 'Pre-Owned Devices include a 14-Day Instant Replacement Guarantee (conditions apply).',
        specs: {
            storage: '256gb',
            variant: 'TDRA',
            color: 'Titanium White',
            box: 'Yes',
            warranty: '14 Day'
        }
    },
    // =====================================================
    // 📱 New Phones
    // =====================================================
    {
        id: 24,
        name: 'Google-Pixel-7',
        cat: 'New Phones',
        img: 'images/products/Google-Pixel-7.jpg',
        images: [
            'images/products/Google-Pixel-7.jpg'
        ],
        desc: 'Google Pixel 7 – Featuring a 6.3-inch AMOLED display, 50MP dual camera, Google Tensor G2 chip, and 4355mAh battery with 30W fast charging. Our purpose is to provide accurate information from trusted sources. If you find any errors or inaccuracies, please let us know.',
        specs: {
            storage: '128gb',
            variant: 'USA/Japan',
            color: 'Yellow/Black',
        }
    },
    {
        id: 25,
        name: 'iPhone-15',
        cat: 'New Phones',
        img: 'images/products/iPhone-15.jpg',
        images: [
            'images/products/iPhone-15.jpg'
        ],
        desc: 'Brand new iPhone 15 with the latest features. Our purpose is to provide accurate information from trusted sources. If you find any errors or inaccuracies, please let us know.',
        specs: {
            storage: '128gb',
            variant: 'Indian/TDRA',
            color: 'Blue',
        }
    },
    {
        id: 26,
        name: 'iPhone-17-Pro-Max',
        cat: 'New Phones',
        img: 'images/products/iPhone-17-Pro-Max.jpg',
        images: [
            'images/products/iPhone-17-Pro-Max.jpg'
        ],
        desc: 'Brand new iPhone 17 Pro Max with the latest features. Our purpose is to provide accurate information from trusted sources. If you find any errors or inaccuracies, please let us know.',
        specs: {
            storage: '256gb',
            variant: 'USA/Japan',
            color: 'Blue/Orange/Silver',
        }
    },
    {
        id: 27,
        name: 'Samsung-Galaxy-A57',
        cat: 'New Phones',
        img: 'images/products/Samsung-Galaxy-A57.jpg',
        images: [
            'images/products/Samsung-Galaxy-A57.jpg'
        ],
        desc: 'Brand new Samsung Galaxy A57 with the latest features. Our purpose is to provide accurate information from trusted sources. If you find any errors or inaccuracies, please let us know.',
        specs: {
            storage: '128gb/256gb',
            variant: 'vietnam',
            color: 'White',
        }
    },
    // =====================================================
    // 🔌 ACCESSORIES
    // =====================================================
    {
        id: 28,
        name: 'Apple USB-C Power Adapter (Indian Variant)',
        cat: 'Accessories',
        img: 'images/products/Apple Orginal.jfif',
        images: [
            'images/products/Apple Orginal.jfif',
            'images/products/Apple Orginal2.jfif',
            'images/products/Apple Orginal3.jfif'
        ],
        price: 4000,             // Sale price (৳)
        oldPrice: 4500,          // Regular price (৳)
        desc: 'Apple Original USB-C Power Adapter (Indian Variant) with fast, reliable charging for compatible devices. Compact, durable and ideal for everyday use. ',
        specs: {
            type: '20W Fast Charger',
            connector: 'USB-C',
            condition: 'Brand New',
            warranty: '12 Months'
        }
    },
    {
        id: 29,
        name: 'Apple USB-C Power Adapter (Dubai Variant)',
        cat: 'Accessories',
        img: 'images/products/Apple USB-C Power Adapter.jfif',
        images: [
            'images/products/Apple USB-C Power Adapter.jfif',
            'images/products/Apple USB-C Power Adapter1.jfif',
            'images/products/Apple USB-C Power Adapter2.jfif'
        ],
        price: 4000,             // Sale price (৳)
        oldPrice: 4500,          // Regular price (৳)
        desc: 'Apple Original USB-C Power Adapter (Dubai Variant) with fast, reliable charging for compatible devices. Compact, durable and ideal for everyday use. ',
        specs: {
            type: '20W Fast Charger',
            connector: 'USB-C',
            condition: 'Brand New',
            warranty: '12 Months'
        }
    },
    {
        id: 30,
        name: 'Samsung PD Adapter',
        cat: 'Accessories',
        img: 'images/products/Samsung PD Adapter.jfif',
        images: [
            'images/products/Samsung PD Adapter.jfif',
            'images/products/Samsung PD Adapter1.jfif',
            'images/products/Samsung PD Adapter2.jfif'
        ],
        price: 2500,             // Sale price (৳)
        oldPrice: 3000,          // Regular price (৳)
        desc: 'Samsung Original PD Power Adapter with fast, reliable charging for compatible devices. Compact, durable and ideal for everyday use. ',
        specs: {
            type: '20W Fast Charger',
            connector: 'USB-C',
            condition: 'Brand New',
            warranty: '06 Months'
        }
    },
    {
        id: 31,
        name: 'Romoss Charger',
        cat: 'Accessories',
        img: 'images/products/Romoss.jpeg',
        images: [
            'images/products/Romoss.jpeg',
            'images/products/Romoss1.jpeg',
            'images/products/Romoss2.jpeg'
        ],
        price: 2000,             // Sale price (৳)
        oldPrice: 2500,          // Regular price (৳)
        desc: 'Romoss fast charger with reliable, safe charging for compatible devices. Compact, durable and ideal for everyday use. ',
        specs: {
            type: '20W Fast Charger',
            connector: 'USB-C',
            condition: 'Brand New',
            warranty: '06 Months'
        }
    }
];

// =====================================================
// 📂 CATEGORIES
// =====================================================
const categories = [
    {
        id: 'Pre-owned Phones',
        icon: '♻️',
        label: 'Pre-owned Phones'
    },
    {
        id: 'New Phones',
        icon: '📱',
        label: 'New Phones'
    },
    {
        id: 'Accessories',
        icon: '🔌',
        label: 'Accessories'
    }
];

// =====================================================
// 🔎 SITE SEO — সবগুলো প্রোডাক্টের জন্য একটাই জায়গা
// আসল SEO লক্ষ্য হলো "CTG Mobile Tech" ব্র্যান্ড নামটাকে র‍্যাংক করানো,
// তাই প্রতিটা প্রোডাক্টে আলাদা title/description/keywords লেখার
// দরকার নেই। নিচের কনফিগটা বদলালেই পুরো সাইটের সব প্রোডাক্ট পেইজে
// একসাথে আপডেট হয়ে যাবে।
// =====================================================
const SITE_BRAND = 'CTG Mobile Tech';
const SITE_LOCATION = 'Chattogram, Bangladesh';
const SITE_SEO = {
    // প্রতিটা প্রোডাক্ট পেইজের মেটা ডেসক্রিপশন এটাই ব্যবহার করবে
    description: `${SITE_BRAND} — genuine pre-owned and new phones, plus phone accessories in ${SITE_LOCATION}. 14-day replacement guarantee. Call or message us on Facebook for details.`,
    // প্রতিটা প্রোডাক্ট পেইজের কিওয়ার্ডে শুধু প্রোডাক্টের নাম যোগ হয়ে বসে
    keywords: `${SITE_BRAND}, mobile shop Chattogram, used iPhone Bangladesh, new phones Bangladesh, phone accessories Chattogram, pre-owned phones Bangladesh`
};

// =====================================================
// 🔎 SEO HELPER FUNCTIONS
// =====================================================
// Get SEO information for a product — title-এ প্রোডাক্টের নাম বসে
// (যাতে পেইজগুলো একে অপরের থেকে আলাদা করা যায়), বাকিটা ব্র্যান্ড-কেন্দ্রিক।
function getProductSEO(product) {
    if (!product) return null;
    return {
        title: `${product.name} — ${SITE_BRAND} | ${SITE_LOCATION}`,
        description: SITE_SEO.description,
        keywords: `${product.name}, ${SITE_SEO.keywords}`
    };
}

// =====================================================
// 🏷️ PRODUCT SEO DATA GENERATOR
// =====================================================
function getProductStructuredData(product, siteUrl = window.location.origin) {
    if (!product) return null;
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.desc,
        "image": product.images || [product.img],
        "brand": {
            "@type": "Brand",
            "name": SITE_BRAND
        },
        "category": product.cat,
        "sku": String(product.id)
    };
}

// =====================================================
// 🧠 UPDATE PAGE SEO
// =====================================================
function updateProductSEO(product) {
    if (!product) return;
    const seo = getProductSEO(product);

    // Page Title
    document.title = seo.title;

    // Meta Description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.setAttribute('name', 'description');
        document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', seo.description);

    // Meta Keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', seo.keywords);

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', seo.title);

    // Open Graph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', seo.description);

    // Open Graph Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', product.img);

    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
        twitterCard = document.createElement('meta');
        twitterCard.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    // Twitter Title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', seo.title);

    // Twitter Description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
        twitterDescription = document.createElement('meta');
        twitterDescription.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', seo.description);

    // Twitter Image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', product.img);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}${window.location.pathname}?id=${product.id}`);

    // Product Structured Data
    let structuredData = document.getElementById('product-structured-data');
    if (!structuredData) {
        structuredData = document.createElement('script');
        structuredData.id = 'product-structured-data';
        structuredData.type = 'application/ld+json';
        document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(getProductStructuredData(product));
}

// =====================================================
// 🔍 GET PRODUCT BY ID
// =====================================================
function getProductById(id) {
    return products.find(product => String(product.id) === String(id));
}

// =====================================================
// 📌 AUTO SEO FOR PRODUCT PAGE
// =====================================================
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    if (productId) {
        const product = getProductById(productId);
        if (product) {
            updateProductSEO(product);
        }
    }
});

// =====================================================
// 😊 HAPPY CUSTOMERS (Testimonials)
// নতুন কাস্টমার রিভিউ যোগ করতে নিচে { } আকারে একটা নতুন এন্ট্রি বসান
// img: কাস্টমারের ছবি images/testimonials/ ফোল্ডারে রেখে লিংক বসান
//      (যেমন: images/testimonials/testimonial-5.jpg),
// name: কাস্টমারের নাম, text: তাদের রিভিউ/মন্তব্য,
// rating: ১ থেকে ৫ (না দিলে ৫ ধরা হবে)
//
// ⚠️ নিচের ৩টা এন্ট্রি শুধু উদাহরণ/placeholder — আসল কাস্টমারের ছবি ও
// রিভিউ দিয়ে এগুলো পরিবর্তন করে নিন, অথবা নতুন এন্ট্রি যোগ করুন।
// =====================================================
const testimonials = [
    {
        id: 1,
        name: 'Happy Customer',
        img: 'images/testimonials/testimonial-1.jpg',
        rating: 5,
        text: 'আরেকজন সন্তুষ্ট কাস্টমারের হাতে তুলে দেওয়া হলো তার পছন্দের কাঙ্ক্ষিত ফোনটি। আপনাদের বিশ্বাস, ভালোবাসা আর সন্তুষ্টিই আমাদের এগিয়ে চলার সবচেয়ে বড় অনুপ্রেরণা। ধন্যবাদ CTG Mobile Tech-এর পাশে থাকার জন্য।'
    },
    {
        id: 2,
        name: 'Happy Customer',
        img: 'images/testimonials/testimonial-2.jpg',
        rating: 5,
        text: 'কাস্টমারের মুখের হাসিই আমাদের সাফল্যের আসল পরিচয়! আজও আরেকজন প্রিয় কাস্টমারের হাতে পৌঁছে দিলাম তার স্বপ্নের ফোন। আপনাদের বিশ্বাসই আমাদের সবচেয়ে বড় প্রাপ্তি।'
    },
    {
        id: 3,
        name: 'Happy Customer',
        img: 'images/testimonials/testimonial-3.jpg',
        rating: 4,
        text: 'আরেকটি সুন্দর ডেলিভারি, আরেকজন সন্তুষ্ট কাস্টমার! আপনার পছন্দের ফোনটি আপনার হাতে তুলে দিতে পেরে আমরা সত্যিই আনন্দিত। আপনাদের আস্থা ও ভালোবাসাই CTG Mobile Tech-এর পথচলার শক্তি।'
    },
    {
        id: 4,
        name: 'Happy Customer',
        img: 'images/testimonials/testimonial-4.jpg',
        rating: 5,
        text: 'আরেকজন প্রিয় কাস্টমারের হাতে তুলে দেওয়া হলো তার কাঙ্ক্ষিত স্মার্টফোন। আপনাদের স্বপ্নের ফোন কেনার যাত্রায় পাশে থাকতে পারাই আমাদের আনন্দ। আপনাদের বিশ্বাস ও ভালোবাসাই CTG Mobile Tech-এর সবচেয়ে বড় অর্জন।'
    }
];

// =====================================================
// 🎬 OUR VIDEOS (Facebook Videos/Reels)
// নতুন ভিডিও যোগ করতে নিচে { } আকারে একটা নতুন এন্ট্রি বসান
// url: ফেসবুক ভিডিও/রিল এর লিংক (facebook.com/.../videos/... বা .../reel/...)
// title: ভিডিওর নিচে যে ক্যাপশন/শিরোনাম দেখাবে (না দিলে খালি থাকবে)
// =====================================================
const videos = [
    {
        id: 1,
        url: 'https://www.facebook.com/reel/2065697380741810',
        title: ''
    }
];
