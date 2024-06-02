document.addEventListener('DOMContentLoaded', function() {
    const categoryDropdown = document.getElementById('category-dropdown');

    // Sample data for fresh recommendations
    const allRecommendations = {
        main: [
            {
                img: 'https://lscdn.blob.core.windows.net/add-post/subcategoryid/10664778-add-17142007716995255.jpeg',
                price: '₹ 88 lakhs',
                description: '5 Bds - 4 Ba - 1350 ft²<br>5 BHK Duplex with modular kitchen, prime location in Siripuram, Vizag.',
                locationTime: 'Siripuram, 2 days ago',
                link: 'post1.html'
            },
            {
                img: 'https://www.archanaskitchen.com/imgcache/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2022/Authentic_Punjabi_Mango_Picke_In_Mustard_Oil_No_Sun_Method_7_400x320.jpg',
                price: '₹ 500',
                description: 'Priya Pickles',
                locationTime: 'Siripuram, 5 days ago',
                link: 'post4.html'
            },
            {
                img: 'https://is1-2.housingcdn.com/01c16c28/42397a57da5b7fe44331d89fd74733a1/v0/fs/2_bhk_independent_house-for-rent-gajuwaka-Visakhapatnam-hall.jpg',
                price: '₹ 10,000/month',
                description: '2 BHK Independent House for Rent in Gajuwaka',
                locationTime: 'Gajuwaka, Visakhapatnam',
                link: 'post2.html'
            },
            {
                img: 'https://lscdn.blob.core.windows.net/add-post/subcategoryid/10664778-add-17134953525657815.jpeg',
                price: '₹ 60 lakhs',
                description: '3 Bds - 2 Ba - 1100 ft²<br>3 BHK Independent House, prime location in Siripuram, Vizag.',
                locationTime: 'Siripuram, 5 days ago',
                link: 'post3.html'
            }
        ],
        product: [
            {
                img: 'https://www.archanaskitchen.com/imgcache/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2022/Authentic_Punjabi_Mango_Picke_In_Mustard_Oil_No_Sun_Method_7_400x320.jpg',
                price: '₹ 500',
                description: 'Priya Pickles',
                locationTime: 'Siripuram, 5 days ago',
                link: 'post4.html'
            },
            {
                img: 'https://thumbs.dreamstime.com/b/clothes-sale-colorful-rack-outside-fashion-store-34214144.jpg',
                price: '₹ 1,200',
                description: 'Clothes Sale<br>Colorful clothes on sale, various sizes and styles.',
                locationTime: 'Downtown, 3 days ago',
                link: 'post5.html'
            }
        ]
    };

    const recommendationList = document.querySelector('.recommendation-list');

    function displayRecommendations(items) {
        recommendationList.innerHTML = '';
        items.forEach(rec => {
            const item = document.createElement('button');
            item.classList.add('recommendation-item');
            item.onclick = () => window.location.href = rec.link;
            item.innerHTML = `
                <img src="${rec.img}" alt="${rec.description}">
                <div class="item-details">
                    <p class="price">${rec.price}</p>
                    <p class="description">${rec.description}</p>
                    <p class="location-time">${rec.locationTime}</p>
                </div>
            `;
            recommendationList.appendChild(item);
        });
    }

    // Determine which recommendations to display based on the current page
    const path = window.location.pathname;
    if (path.includes('product.html')) {
        displayRecommendations(allRecommendations.product);
    } else {
        displayRecommendations(allRecommendations.main);
    }

    // Function to handle search and redirect based on the search term
    window.performSearch = function() {
        const query = document.getElementById('search-input').value.toLowerCase();
        
        if (query.includes('rent')) {
            window.location.href = 'rent.html';
        } else if (query.includes('sale')) {
            window.location.href = 'sale.html';
        } else if (query.includes('product')) {
            window.location.href = 'product.html';
        } else {
            alert('No matching category found. Please try "rent", "sale", or "product".');
        }
    };

    // Function to handle category selection
    categoryDropdown.addEventListener('change', function() {
        const selectedCategory = categoryDropdown.value;
        if (selectedCategory) {
            window.location.href = selectedCategory;
        }
    });
});
