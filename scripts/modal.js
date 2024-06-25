var cartmodal = document.getElementById("cartModal");
var btn = document.getElementById("cartBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  cartmodal.style.display = "block";
};

span.onclick = function () {
  cartmodal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == cartmodal) {
    cartmodal.style.display = "none";
  }
};
