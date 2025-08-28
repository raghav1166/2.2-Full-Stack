// Sample product data
const products = [
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Novel", category: "Books" },
  { name: "Cookbook", category: "Books" }
];

const categorySelect = document.getElementById("categorySelect");
const productList = document.getElementById("productList");

// Render products
function renderProducts(filter) {
  productList.innerHTML = ""; // Clear old list
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.name;
    productList.appendChild(li);
  });
}

// Initial render
renderProducts("all");

// Event listener for dropdown
categorySelect.addEventListener("change", () => {
  renderProducts(categorySelect.value);
});
