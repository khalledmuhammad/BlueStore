const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobNav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* -----------render products */

const productElement = document.querySelector(".ProductsPage");
console.log(productElement);

const renderProduct = () => {
  Products.forEach((product) => {
    productElement.innerHTML += `
    <div class="productCard">
    <img
      src="${product.img}"
      alt="product"
      class="productImg"
    />
    <div class="productIcons">
      <img src="${product.heartIco}" alt="heart" class="image-icon mx-3" rol="button" onclick="addToCart(${product.id})" />
      <img src="${product.favIco}" alt="cart" class="image-icon"  rol="button"   onclick="addToFav( ${product.id} )"/>
    </div>
    <h3>${product.name}</h3>
    <span> ${product.desc} </span>
    <div   class=" d-flex flex-row justify-content-between align-items-center" >
    
      <img src="${product.stars}" alt="stars" class="stars" />
      
      <p class="product-price" >${product.price} $ </p>
    </div>
  </div>

    `;
  });
};

renderProduct();

/* -----------------adding item to cart ----------- */

const cartItem = document.querySelector(".CartModal");
const subTotal = document.querySelector(".subTotal");
const CartNavModal = document.querySelector(".CartNavModal");
const FavNavModal = document.querySelector(".FavNavModal");

let cart = [];
const addToCart = (id) => {
  const existItem = cart.find((x) => x.id === id);

  if (cart.some((x) => x.id === id)) {
    alert("item already in cart");
  } else {
    const CartItem = Products.find((x) => x.id === id);
    cart.push({
      ...CartItem,
      numberOfItems: 1,
    });
  }
  UpdateCart();
};

const UpdateCart = () => {
  renderCartItems();
};

/* render cart item */
function renderCartItems() {
  cartItem.innerHTML = ``;
  CartNavModal.innerHTML = ``; // clear cart element

  // clear cart element
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price;
  });

  cart.forEach((item) => {
    CartNavModal.innerHTML += `
       
        <div class="CartItem card p-2">
          <img
            class="card-img"
            src="${item.img}"
            alt="Card image cap"
          />
          <div class="card-body d-flex flex-column justify-content-around">
            <p class="card-text name">${item.name}</p>

            <p class="card-text product-price">${item.price} $ </p>
            <p class="text-center"> the total price:  ${totalPrice}</p>

            <button class="btn btn-danger"  onclick="removeFromCart(${item.id})" >remove from cart</button>
          </div>
         
              
      </div>
      
        
     
        </div> 

        `;

    cartItem.innerHTML += `
       
        <div class="CartItem card p-2">
          <img
            class="card-img"
            src="${item.img}"
            alt="Card image cap"
          />
          <div class="card-body d-flex flex-column justify-content-around">
            <p class="card-text name">${item.name}</p>

            <p class="card-text product-price">${item.price} $ </p>
            <p class="text-center"> the total price:  ${totalPrice}</p>

            <button class="btn btn-danger"  onclick="removeFromCart(${item.id})" >remove from cart</button>
          </div>
         
              
      </div>
      
        
     
        </div> 

        `;
  });
}
/* ------------------- remove item from cart---------------- */

const removeFromCart = (id) => {
  cart = cart.filter((x) => x.id !== id);
  renderCartItems();
};

/* ------------------- add item to fav ---------------- */
const FavModal = document.querySelector(".FavModal");

let Fav = [];

const addToFav = (id) => {
  if (Fav.some((x) => x.id === id)) {
    alert("item already in favourites");
  } else {
    const FavItem = Products.find((x) => x.id === id);
    Fav.push({
      ...FavItem,
      numberOfItems: 1,
    });
    console.log(Fav);
  }
  renderFav();
};

function renderFav() {
  FavModal.innerHTML = ``; // clear cart element
  FavNavModal.innerHTML = "";

  Fav.forEach((item) => {
    FavNavModal.innerHTML += ` 
    <div class="CartItem card p-2">
    <img
      class="card-img"
      src="${item.img}"
      alt="Card image cap"
    />
    <div class="card-body d-flex flex-row justify-content-around">
      <p class="card-text name">${item.name}</p>

      <p class="card-text product-price">${item.price} $ </p>
      <button class="btn btn-primary"  onclick="addToCart(${item.id})" >add To Cart</button>
    </div>
        
</div>

  

  </div> `;
    FavModal.innerHTML += `
     
      <div class="CartItem card p-2">
        <img
          class="card-img"
          src="${item.img}"
          alt="Card image cap"
        />
        <div class="card-body d-flex flex-row justify-content-around">
          <p class="card-text name">${item.name}</p>

          <p class="card-text product-price">${item.price} $ </p>
          <button class="btn btn-primary"  onclick="addToCart(${item.id})" >add To Cart</button>
        </div>
            
    </div>
    
      
   
      </div> 

      `;
  });
}
