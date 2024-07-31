var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("main-content-banner");
    if (n > x.length) {slideIndex = 1} ;
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs();
}, 1000);

function formValidation() {
    let name = document.getElementById("input-name").value;

    if (name == "") {
        alert("Maaf inputan anda kosong");
    } else {
        alert("Sukses menginput");
    }
}

document.getElementById("").addEventListener("click", () => formValidation());