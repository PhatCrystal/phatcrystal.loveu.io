const DISCORD_LINK = "https://discord.gg/CHfmPs47ZR";

const products = [
    // Roblox Script
    {
        id: "PC-001",
        name: "Gravity Hub UI",
        price: "1.000 PCred",
        category: "Roblox Script",
        image: "https://i.ibb.co/TDsDrvGx/Ui-Gravity.png"
    },
    {
        id: "PC-002",
        name: "Source Relz Hub",
        price: "1.000 PCred",
        category: "Roblox Script",
        image: "https://image2url.com/r2/bucket2/images/1768063728836-948807ac-ab36-493e-9dfe-bb73af1134d7.png"
    },
    // Code Tool
    {
        id: "PC-003",
        name: "Code Nhạc Tự Chạy",
        price: "500 PCred",
        category: "Code Tool",
        image: "https://i.ibb.co/YTZTHSTm/image.png"
    }
];

let currentCat = "All";

function displayProducts(data) {
    const container = document.getElementById('product-list');
    if (!container) return;

    if (data.length === 0) {
        container.innerHTML = `<p style="text-align:center; grid-column: 1/-1; opacity:0.5; padding: 50px;">Không tìm thấy sản phẩm phù hợp...</p>`;
        return;
    }

    container.innerHTML = data.map(item => `
        <div class="shop-item-card">
            <div class="card-header-meta">
                <span class="order-id">#Mã Đơn Hàng: ${item.id}</span>
                <span class="product-price">${item.price}</span>
            </div>
            <div class="product-info-row">
                <h3>${item.name}</h3>
            </div>
            <div class="product-image-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <a href="${DISCORD_LINK}" target="_blank" class="shop-buy-btn">
                <i class="fa-brands fa-discord"></i> Mua ngay
            </a>
        </div>
    `).join('');
}

function filterCategory(cat) {
    currentCat = cat;
    // Cập nhật trạng thái nút Tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const btnText = btn.innerText === 'Tất cả' ? 'All' : btn.innerText;
        btn.classList.toggle('active', btnText === cat);
    });
    filterProducts();
}

function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search) || p.id.toLowerCase().includes(search);
        const matchCat = currentCat === "All" || p.category === currentCat;
        return matchSearch && matchCat;
    });
    displayProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => displayProducts(products));
