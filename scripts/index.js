
var last4Cards = document.getElementById("last4Cards");
var viewLessButton = document.getElementById("viewLessButton");
var viewMoreButton = document.getElementById("viewMoreButton");

function viewMore() {
    last4Cards.style.display = "flex";
    viewLessButton.style.display = "inline";
    viewMoreButton.style.display = "none";
}

function viewLess() {
    last4Cards.style.display = "none";
    viewLessButton.style.display = "none";
    viewMoreButton.style.display = "inline";
}