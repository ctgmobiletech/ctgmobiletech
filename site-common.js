/* ======================================================================
   📱 MOBILE SHOP — Common Site Information

   Load this file on every page:
   index.html
   about.html
   products.html
   contact.html
   etc.

   Changing any information here will update it across all pages.
   ====================================================================== */


const SITE = {

    /* ------------------------------------------------------------------
       🏪 Site / Shop Name
       ------------------------------------------------------------------ */

    name: 'চচচচCTG Mobile Tech',

    tagline: 'Your Tech Destination',


    /* ------------------------------------------------------------------
       📱 Shop Short Description
       ------------------------------------------------------------------ */

    shortDesc:
        'Your trusted destination for new and used iPhones, Google Pixel phones, and quality mobile accessories.',


    /* ------------------------------------------------------------------
       📞 Contact Information
       ------------------------------------------------------------------ */

    phone: '01627710145',

    email: 'ctgmobiletech145@gmail.com',

    address: 'hop No: 536, Level 5, Finlay South City, Bahaddarhat, Chittagong.',


    /* ------------------------------------------------------------------
       📍 Google Maps

       Put your shop's exact Google Maps link here.
       ------------------------------------------------------------------ */

    mapLink:
        'https://www.google.com/maps/search/?api=1&query=Chattogram,Bangladesh',


    /* ------------------------------------------------------------------
       📘 Facebook Page
       ------------------------------------------------------------------ */

    facebook:
        'https://www.facebook.com/ctgmobiletech',


    /* ------------------------------------------------------------------
       🏷️ Logo

       Put your mobile shop's new logo here.
       ------------------------------------------------------------------ */

    logoImg:
        'https://i.ibb.co/ksf8P1M2/b67ccab4-452e-4caf-bf30-b7855ce94251.png',


    /* ------------------------------------------------------------------
       🖼️ Homepage Banner

       Put your mobile shop's banner image URL here.
       ------------------------------------------------------------------ */

    bannerImg:
        'https://i.ibb.co/pv8mHNp3/2.png',


    /* ------------------------------------------------------------------
       🛍️ Shop Categories
       ------------------------------------------------------------------ */

    categories: [
        'New iPhone',
        'Used iPhone',
        'New Google Pixel',
        'Used Google Pixel',
        'Accessories'
    ],


    /* ------------------------------------------------------------------
       📱 Product Types
       ------------------------------------------------------------------ */

    productTypes: [
        'New Phone',
        'Used Phone',
        'Accessories'
    ],


    /* ------------------------------------------------------------------
       🍎 Main Brands
       ------------------------------------------------------------------ */

    brands: [
        'Apple',
        'Google'
    ],


    /* ------------------------------------------------------------------
       🔋 Used Phone Information
       ------------------------------------------------------------------ */

    usedPhoneFeatures: [
        'Battery Health',
        'Phone Condition',
        'Storage',
        'IMEI Verification',
        'Display Condition',
        'Camera Test',
        'Face ID / Fingerprint Test',
        'Charging Test'
    ],


    /* ------------------------------------------------------------------
       🛡️ Warranty / Checking
       ------------------------------------------------------------------ */

    warrantyText:
        'Every used phone is fully tested before it is sold.',


    /* ------------------------------------------------------------------
       🚚 Delivery
       ------------------------------------------------------------------ */

    deliveryCharge: 70,


    /* ------------------------------------------------------------------
       💳 Payment Methods
       ------------------------------------------------------------------ */

    paymentMethods: [
        'Cash on Delivery',
        'bKash',
        'Nagad'
    ],


    /* ------------------------------------------------------------------
       🏪 Store Features
       ------------------------------------------------------------------ */

    storeFeatures: [
        {
            icon: '📱',
            title: 'New & Used Phone',
            text: 'New and verified used iPhones and Google Pixel phones.'
        },
        {
            icon: '🛡️',
            title: 'Checking Warranty',
            text: 'Necessary testing and checking before buying a used phone.'
        },

        {
            icon: '🔌',
            title: 'Accessories',
            text: 'Chargers, cables, cases, earbuds, and other essential accessories.'
        }
    ],


    /* ------------------------------------------------------------------
       📝 Footer Description
       ------------------------------------------------------------------ */

    footerDesc:
        'At CTG Mobile Tech you\'ll find new and used iPhones, Google Pixel phones, and essential mobile accessories. Quality products and trustworthy service are our commitment.',


    /* ------------------------------------------------------------------
       Copyright
       ------------------------------------------------------------------ */

    copyright:
        '© 2026 CTG Mobile Tech — All rights reserved.',


    /* ------------------------------------------------------------------
       Web3Forms Access Key

       When an order is submitted, this key is used
       to send the form data to your email.
       ------------------------------------------------------------------ */

    web3formsKey:
        '038246c3-6489-499a-babe-6885836e714e'

};



/* ======================================================================
   📱 Function that displays the site's common information on the page
   ====================================================================== */

function renderSiteInfo() {


    /* ------------------------------------------------------------------
       Change an element's text
       ------------------------------------------------------------------ */

    const setText = (id, value) => {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent = value;
        }

    };


    /* ------------------------------------------------------------------
       Change an element's HTML
       ------------------------------------------------------------------ */

    const setHTML = (id, value) => {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML = value;
        }

    };


    /* ------------------------------------------------------------------
       Change an image's source
       ------------------------------------------------------------------ */

    const setSrc = (id, value) => {

        const element =
            document.getElementById(id);

        if (element) {
            element.src = value;
        }

    };



    /* ==================================================================
       HEADER / BRAND
       ================================================================== */

    // Shop name
    setText(
        'brandName',
        SITE.name
    );


    // Tagline
    setText(
        'brandTagline',
        SITE.tagline
    );


    // Logo
    setSrc(
        'brandLogo',
        SITE.logoImg
    );


    // Favicon
    const faviconElement =
        document.getElementById('favicon');

    if (faviconElement) {
        faviconElement.href =
            SITE.logoImg;
    }



    /* ==================================================================
       TOP BAR
       ================================================================== */

    setHTML(
        'topBarInfo',
        `
        <span>
            📞
            <a href="tel:${SITE.phone}">
                ${SITE.phone}
            </a>
        </span>

        <span>
            ✉️
            <a href="mailto:${SITE.email}">
                ${SITE.email}
            </a>
        </span>
        `
    );



    /* ==================================================================
       BANNER
       ================================================================== */

    setSrc(
        'bannerImg',
        SITE.bannerImg
    );



    /* ==================================================================
       FOOTER
       ================================================================== */

    // Footer Brand Name
    setText(
        'footerBrandName',
        SITE.name
    );


    // Footer Description
    setText(
        'footerDesc',
        SITE.footerDesc
    );


    // Footer Tagline
    setText(
        'footerTagline',
        `"${SITE.tagline}"`
    );


    // Copyright
    setText(
        'copyrightText',
        SITE.copyright
    );



    /* ==================================================================
       FOOTER CONTACT INFORMATION
       ================================================================== */

    setHTML(
        'footerContactList',
        `
        <li>
            📞
            <strong>Call:</strong>

            <a href="tel:${SITE.phone}">
                ${SITE.phone}
            </a>
        </li>


        <li>
            ✉️
            <strong>email:</strong>

            <a href="mailto:${SITE.email}">
                ${SITE.email}
            </a>
        </li>


        <li>
            📍
            <strong>address:</strong>

            <a
                href="${SITE.mapLink}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${SITE.address}
            </a>
        </li>


        <li>
            📘
            <strong>Facebook:</strong>

            <a
                href="${SITE.facebook}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Page
            </a>
        </li>
        `
    );



    /* ==================================================================
       PHONE SHOP FEATURES
       ================================================================== */

    const featuresContainer =
        document.getElementById('storeFeatures');

    if (featuresContainer) {

        featuresContainer.innerHTML =
            SITE.storeFeatures
                .map(feature => `
                    <div class="store-feature">

                        <div class="feature-icon">
                            ${feature.icon}
                        </div>

                        <h3>
                            ${feature.title}
                        </h3>

                        <p>
                            ${feature.text}
                        </p>

                    </div>
                `)
                .join('');

    }



    /* ==================================================================
       CATEGORY LIST
       ================================================================== */

    const categoryContainer =
        document.getElementById('shopCategories');

    if (categoryContainer) {

        categoryContainer.innerHTML =
            SITE.categories
                .map(category => `
                    <span class="shop-category">
                        ${category}
                    </span>
                `)
                .join('');

    }



    /* ==================================================================
       PAGE TITLE
       ================================================================== */

    if (SITE.name) {

        document.title =
            document.title ||
            `${SITE.name} — ${SITE.tagline}`;

    }

}



/* ======================================================================
   📄 PAGE LOAD

   renderSiteInfo() will run once the HTML has fully loaded.
   ====================================================================== */

document.addEventListener(
    'DOMContentLoaded',
    renderSiteInfo
);
