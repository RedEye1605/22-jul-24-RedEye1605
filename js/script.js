// Banner autoslide functionality
var slideIndex = 1;
showDivs(slideIndex);

// Function to increment/decrement slide index
function plusDivs(n = 1) {
    showDivs(slideIndex += n);
}

// Function to display the correct slide
function showDivs(n) {
    var i;
    var slides = document.querySelectorAll(".banner-item img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Automatically change slides every 3 seconds
setInterval(() => {
    plusDivs();
}, 3000);

// Form validation function
function formValidation() {
    let isValid = true;

    // Get the input elements
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let interest = document.getElementById("interest");

    // Validate name
    if (name.value.trim() === "") {
        name.classList.add("invalid");
        name.classList.remove("valid");
        document.getElementById("name-error").textContent = "* Please fill this";
        isValid = false;
    } else {
        name.classList.remove("invalid");
        name.classList.add("valid");
        document.getElementById("name-error").textContent = "";
    }

    // Validate email
    if (email.value.trim() === "") {
        email.classList.add("invalid");
        email.classList.remove("valid");
        document.getElementById("email-error").textContent = "* Please fill this";
        isValid = false;
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
        document.getElementById("email-error").textContent = "";
    }

    // Validate interest
    if (interest.value.trim() === "") {
        interest.classList.add("invalid");
        interest.classList.remove("valid");
        document.getElementById("interest-error").textContent = "* Please fill this";
        isValid = false;
    } else {
        interest.classList.remove("invalid");
        interest.classList.add("valid");
        document.getElementById("interest-error").textContent = "";
    }

    if (isValid) {
        alert("Thank you for contacting us, " + name.value + "! We will get back to you soon.");
        document.getElementById("contact-form").reset();
    }

    return isValid; // Return the validation result
}

// Add event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    if (formValidation()) {
        // If form validation is successful, submit the form
        // document.getElementById("contact-form").submit();
        document.getElementById("contact-form").reset();
    }
});

// Menu toggle for mobile view
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

