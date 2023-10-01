const products = [
  {
    name: "Welding Alloy 1",
    price: 100,
  },
  {
    name: "Welding Alloy 2",
    price: 150,
  },
  {
    name: "Grinding Stone 1",
    price: 20,
  },
  {
    name: "Grinding Stone 2",
    price: 30,
  },
  {
    name: "Raw Material 1",
    price: 50,
  },
  {
    name: "Raw Material 2",
    price: 75,
  },
];

// Create a list element for each product.
const productList = document.getElementById("products");
for (const product of products) {
  const li = document.createElement("li");
  const productName = document.createElement("span");
  productName.textContent = product.name;
  const productPrice = document.createElement("span");
  productPrice.textContent = `$${product.price}`;

  li.appendChild(productName);
  li.appendChild(productPrice);

  productList.appendChild(li);
}
