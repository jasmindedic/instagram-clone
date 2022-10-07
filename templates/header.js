// Get header element 
let header = document.querySelector(".header");


// Function to generate header content
function generateHeader() {
    header.innerHTML = createHeaderContent();
}

// Function to create and return header content
function createHeaderContent() {
    return `
    <div class="logoContainer">
        <img class="logoHeader" src="./images/logo.png">
    </div>
    <div class="searchbarContainer">
        <input class="searchbar" type="text" placeholder="Search..">
    </div>
    <div class="toggleBtn" onclick="hamburgerMenu()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <ul class="navLinks">
        <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-location-arrow"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-safari"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="#"><img src="./images/profile-pic3.jpg"></a></li>
    </ul>
    `;
}


/* Create function to add functionality to hamburger menu */
function hamburgerMenu() {
    // Get needed elements
    let logoContainer = document.querySelector(".logoContainer");
    let searchbarContainer = document.querySelector(".searchbarContainer");
    let navLinks = document.querySelector(".navLinks");

    logoContainer.classList.toggle("active");
    searchbarContainer.classList.toggle("active");
    navLinks.classList.toggle("active");
}