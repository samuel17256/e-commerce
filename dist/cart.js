let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let cart = document.querySelector(".cart");
let list = document.getElementById("list");
let listCart = document.querySelector(".listCart");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  cart.classList.remove("translate-x-full");
  cart.classList.add("translate-x-0");
});

closeShopping.addEventListener("click", () => {
  cart.classList.remove("translate-x-0");
  cart.classList.add("translate-x-full");
});

let products = [
  {
    id: 1,
    name: "CLOTHES",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 5000,
  },
  {
    id: 2,
    name: "SLIPPERS HEELS",
    image:
      "https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    price: 1500,
  },
  {
    id: 3,
    name: "BAG",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
    price: 50000,
  },
  {
    id: 4,
    name: "JEWELRIES",
    image:
      "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2Vscmllc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 2500,
  },
  {
    id: 5,
    name: "COSMETICS",
    image:
      "https://images.unsplash.com/photo-1583784561105-a674080f391e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    price: 250000,
  },
  {
    id: 6,
    name: "PERFUMES",
    image:
      "https://plus.unsplash.com/premium_photo-1679064286615-e5e4d4940dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D",
    price: 4500,
  },
  {
    id: 7,
    name: "HAIR CREAM",
    image:
      "https://images.unsplash.com/photo-1673350963941-441eac15973c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpciUyMGNyZWFtfGVufDB8fDB8fHww",
    price: 4500,
  },
  {
    id: 8,
    name: "NAIL POLISH",
    image:
      "https://images.unsplash.com/photo-1602585578130-c9076e09330d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5haWxzfGVufDB8fDB8fHww",
    price: 4500,
  },
  {
    id: 9,
    name: "BODY CREAM",
    image:
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvZHklMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
    price: 4500,
  },
];

let listCarts = [];
function productCarts() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add(
      "item",
      "bg-white",
      "rounded-xl",
      "mb-4",
      "shadow",
      "flex",
      "flex-col",
      "items-center",
      "text-center",
      "gap-2"
    );
    newDiv.innerHTML = `
    <img src="${value.image}" class="w-20 h-20 rounded-lg mx-auto" />
    <div class="title">${value.name}</div>
    <div class="price">₦${value.price.toLocaleString()}</div>
  <button onclick="addToCart(${key})" class="bg-black px-4 py-1 text-slate-100 mb-4 rounded">
    Add To Cart
</button>

    `;
    list.appendChild(newDiv);
  });
}

productCarts();

function addToCart(key) {
  if (listCarts[key] != 0) {
    listCarts[key] = JSON.parse(JSON.stringify(products[key]));
    listCarts[key].quantity = 1;
  }
  reloadCart();
}

// function reloadCart(){
//     listCart.innerHTML='';
//     let count=0;
//     let totalPrice=0;
//     listCarts.forEach((value,key)=>{
//     totalPrice = totalPrice + value.price;
//     count = count + value.quantity;

//     if(value != null){
//         let newDiv=document.createElement('li');
//         newDiv.innerHTML=`
//         <div><img src="${value.image}"/></div>
//         <div>${value.name}</div>
//         <div>₦${value.price.toLocaleString()}</div>
//         <div>${value.quantity}</div>
//         <div>
//         <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
//            <div class="count">${value.quantity}</div>
//             <button onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
//         </div>
//         `
//         listCart.appendChild(newDiv);
//     }
//     })
//     total.innerText=totalPrice.toLocaleString();
//     quantity.innerText=count;
// }

function reloadCart() {
  listCart.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCarts.forEach((value, key) => {
    if (value != 0) {
      totalPrice += value.price;
      count += value.quantity;

      let li = document.createElement("li");
      li.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
        "py-2",
        "px-1",
        "bg-gray-100",
        "rounded-lg",
        "shadow"
      );

      li.innerHTML = `
                <div class="w-16 h-16 flex-shrink-0">
                    <img src="${value.image}" alt="${
        value.name
      }" class="w-full h-full object-cover rounded" />
                </div>
                <div class="flex-1">
                    <div class="font-semibold text-gray-700">${value.name}</div>
                    <div class="text-sm text-gray-700">₦${(
                      value.price / value.quantity
                    ).toLocaleString()}</div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })" class=" text-black px-2 py-1 rounded-md bg-slate-700">-</button>
                    <div class="count px-2 text-center text-black">${
                      value.quantity
                    }</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })" class="text-black px-2 py-1">+</button>
                </div>
                <div class="font-bold text-blue-600 text-sm">₦${value.price.toLocaleString()}</div>
            `;

      listCart.appendChild(li);
    }
  });

  total.innerText = `₦${totalPrice.toLocaleString()}`;
  quantity.innerText = count;
  localStorage.setItem("cart", JSON.stringify(listCarts));
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCarts[key];
  } else {
    listCarts[key].quantity = quantity;
    listCarts[key].price = quantity * products[key].price;
  }
  reloadCart();
}

function clearCart() {
  listCarts = [];
  localStorage.removeItem("cart");
  reloadCart();
}
