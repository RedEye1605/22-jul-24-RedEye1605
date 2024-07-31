var slideIndex = 1;
showDivs(slideIndex);

// Function to increment/decrement slide index
function plusDivs(n = 1) {
    showDivs(slideIndex += n);
}

// Function to display the correct slide
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner-item");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// Automatically change slides every 3 seconds
setInterval(() => {
    plusDivs();
}, 3000);

// Form validation function
function formValidation() {
    let name = document.getElementById("input-name").value;

    if (name.trim() === "") {
        alert("Maaf, inputan anda kosong.");
    } else {
        alert("Sukses menginput.");
    }
}

// Add event listener for form submission
document.getElementById("submit-button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    formValidation();
});

// Menu toggle for mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
