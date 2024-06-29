var cartsidebar = document.getElementById("cartSidebar");
var btn = document.getElementById("cartBtn");
var cbtn = document.getElementById("cartClose");

btn.onclick = function () {
  cartSidebar.style.display = "block";
};

cbtn.onclick = function () {
  cartSidebar.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == cartSidebar) {
    cartSidebar.style.display = "none";
  }
};
