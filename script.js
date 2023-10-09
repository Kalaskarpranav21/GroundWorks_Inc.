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

// Get the search bar element.
const searchBar = document.getElementById("search");

// Create a listener for the search bar's keyup event.
searchBar.addEventListener("keyup", function() {
  // Get the search value.
  const searchValue = searchBar.value;

  // Filter the product list by the search value.
  const filteredProducts = products.filter(product => product.name.includes(searchValue));

  // Update the product list.
  productList.innerHTML = "";
  for (const product of filteredProducts) {
    const li = document.createElement("li");
    const productName = document.createElement("span");
    productName.textContent = product.name;
    const productPrice = document.createElement("span");
    productPrice.textContent = `$${product.price}`;

    li.appendChild(productName);
    li.appendChild(productPrice);

    productList.appendChild(li);
  }
});

// Create a shopping cart object.
const shoppingCart = {};

// Add a product to the shopping cart.
function addToCart(product) {
  if (!shoppingCart[product.id]) {
    shoppingCart[product.id] = {
      product: product,
      quantity: 1,
    };
  } else {
    shoppingCart[product.id].quantity++;
  }
}

// Update the shopping cart total.
function updateShoppingCartTotal() {
  let total = 0;
  for (const product in shoppingCart) {
    total += shoppingCart[product].product.price * shoppingCart[product].quantity;
  }

  // Display the shopping cart total.
  document.querySelector("#shoppingCartTotal").textContent = total;
}

// Remove a product from the shopping cart.
function removeFromCart(product) {
  delete shoppingCart[product.id];
  updateShoppingCartTotal();
}

// Checkout the shopping cart.
function checkoutShoppingCart() {
  // TODO: Implement checkout functionality.
}

// Add event listeners to the add to cart buttons.
document.querySelectorAll(".addToCartButton").forEach(button => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.product);
  });
});

