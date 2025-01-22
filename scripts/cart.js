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
  productId: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  image: "images/image-product-1-thumbnail.jpg",
};

const orderItems = [];

class CartItem {
  constructor(cartItem) {
    this.productId = cartItem.productId;
    this.name = cartItem.name;
    this.price = cartItem.price.toFixed(2);
    this.qty = itemQty;
    this.image = cartItem.image;
  }
  calculateSubtotal() {
    return this.price * this.qty;
  }

  addItemToOrder() {
    orderItems.push(this);
  }
  // removeItemFromCart() {
  //   if (orderItems.length === 1) {
  //     console.log("its getting here");
  //   }
  // }
}

function handleAddToCart() {
  if (itemQty === 0) {
    return;
  } else {
    cartEmptyTextToggle();
    cartBtnCheckoutToggle();
    const newCartItem = new CartItem(sneakersObject);
    const cartSubtotal = newCartItem.calculateSubtotal();
    handleCartToggleOpen();
    newCartItem.addItemToOrder();
    updateCartUI();
  }
}

function updateCartUI() {
  if (!orderItems.length) {
    cartItemsWrapper.innerHTML = `<p class="cart-empty-text">Your cart is empty.</p>`;
    cartEmptyTextToggle();
    cartBtnCheckoutToggle();
  } else {
    orderItems.forEach((item) => {
      cartItemsWrapper.innerHTML += generateCartItemHTML(item);
    });
  }
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

function generateCartItemHTML(itemObj) {
  return `
      <div class="cart-item flex">
        <img src=${itemObj.image} alt="" />
        <div class="cart-item-content-wrapper flex">
          <div class="cart-item-text-wrapper">
            <p class="cart-item-name">${itemObj.name}</p>

            <div class="price-wrapper flex">
              <p class="unit-price">$${itemObj.price}</p>
              <p class="qty">x ${itemObj.qty}</p>
              <p class="subtotal">$${itemObj.calculateSubtotal()}</p>
            </div>
          </div>
          <img class="btn-remove-from-cart" data-prod=${
            itemObj.productId
          } src="images/icon-delete.svg" alt="" />
        </div>
      </div>
    `;
}

function removeItemFromCart(id) {
  orderItems.forEach((item, idx) => {
    if (item.productId === parseInt(id)) {
      orderItems.splice(idx, 1);
    }
  });
  updateCartUI();
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-remove-from-cart")) {
    const prodIdToRemove = e.target.dataset.prod;
    removeItemFromCart(prodIdToRemove);
  }
});

cartIcon.addEventListener("click", handleCartToggleOpen);

btnQtyDec.addEventListener("click", () => {
  handleQtyChange("dec");
});

btnQtyInc.addEventListener("click", () => {
  handleQtyChange("inc");
});

btnAddToCart.addEventListener("click", handleAddToCart);

showItemQty();
