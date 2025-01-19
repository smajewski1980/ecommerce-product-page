const cartIcon = document.querySelector(".cart-icon");
const cartWrapper = document.querySelector(".cart-wrapper");
const itemQtyElem = document.querySelector(".item-qty");
const btnQtyInc = document.querySelector(".qty-inc");
const btnQtyDec = document.querySelector(".qty-dec");
const btnAddToCart = document.querySelector(".btn-add-to-cart");

let itemQty = 0;

const sneakersObject = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  image: "../images/image-product-1-thumbnail.jpg",
};

class CartItem {
  constructor(cartItem) {
    this.name = cartItem.name;
    this.price = cartItem.price.toFixed(2);
    this.qty = itemQty;
    this.image = cartItem.image;
  }
  calculateSubtotal() {
    return this.price * this.qty;
  }
}

function handleAddToCart() {
  const newCartItem = new CartItem(sneakersObject);
  const cartSubtotal = newCartItem.calculateSubtotal();
  console.log(newCartItem);
  console.log(cartSubtotal);
  // grab cart items wrapper
  // generate HTML and inject into cart wrapper
  // make cart appear
}

function showItemQty() {
  itemQtyElem.textContent = itemQty;
}

function handleCartIconClick() {
  cartWrapper.classList.toggle("go-away");
}

function handleQtyChange(incOrDec) {
  if (incOrDec === "dec") {
    if (itemQty === 0) {
      return;
    } else {
      itemQty--;
    }
    showItemQty();
  }
  if (incOrDec === "inc") {
    itemQty++;
    showItemQty();
  }
}

cartIcon.addEventListener("click", handleCartIconClick);

btnQtyDec.addEventListener("click", () => {
  handleQtyChange("dec");
});

btnQtyInc.addEventListener("click", () => {
  handleQtyChange("inc");
});

btnAddToCart.addEventListener("click", handleAddToCart);

showItemQty();
