const cartIcon = document.querySelector(".cart-icon");
const cartWrapper = document.querySelector(".cart-wrapper");
const itemQtyElem = document.querySelector(".item-qty");
const btnQtyInc = document.querySelector(".qty-inc");
const btnQtyDec = document.querySelector(".qty-dec");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
const cartEmptyText = document.querySelector(".cart-empty-text");
const btnCheckout = document.querySelector(".btn-checkout");

let itemQty = 0;

const sneakersObject = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  image: "images/image-product-1-thumbnail.jpg",
};

const orderItems = [];

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
  generateCartItemHTML({ name, price, image }) {
    const className = name.split(" ").join("-");

    return `
      <div class="cart-item flex">
        <img src=${image} alt="" />
        <div class="cart-item-content-wrapper flex">
          <div class="cart-item-text-wrapper">
            <p class="cart-item-name">${name}</p>

            <div class="price-wrapper flex">
              <p class="unit-price">$${price}</p>
              <p class="qty">x ${this.qty}</p>
              <p class="subtotal">$${this.calculateSubtotal()}</p>
            </div>
          </div>
          <img class="btn-remove-${className}-from-cart" onClick=${handleCartItemRemove} src="images/icon-delete.svg" alt="" />
        </div>
      </div>
    `;
  }
  addCartItemHTML() {
    const HTML = this.generateCartItemHTML(this);
    cartItemsWrapper.innerHTML += HTML;
  }
  addItemToOrder() {
    orderItems.push(this);
  }
  removeItemFromCart() {
    if (orderItems.length === 1) {
      console.log("its getting here");
    }
  }
}

function handleAddToCart() {
  cartEmptyTextToggle();
  cartBtnCheckoutToggle();
  const newCartItem = new CartItem(sneakersObject);
  const cartSubtotal = newCartItem.calculateSubtotal();
  newCartItem.addCartItemHTML();
  handleCartToggleOpen();
  newCartItem.addItemToOrder();
  // make trash icon remove item from cart
}

function handleCartItemRemove() {
  this.removeItemFromCart();
}

function showItemQty() {
  itemQtyElem.textContent = itemQty;
}

function handleCartToggleOpen() {
  cartWrapper.classList.toggle("go-away");
}

function cartEmptyTextToggle() {
  cartEmptyText.classList.toggle("go-away");
}

function cartBtnCheckoutToggle() {
  btnCheckout.classList.toggle("go-away");
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

cartIcon.addEventListener("click", handleCartToggleOpen);

btnQtyDec.addEventListener("click", () => {
  handleQtyChange("dec");
});

btnQtyInc.addEventListener("click", () => {
  handleQtyChange("inc");
});

btnAddToCart.addEventListener("click", handleAddToCart);

showItemQty();
