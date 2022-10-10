// Get footer element 
let footer = document.querySelector(".footer");



// Function to generate footer content
function generateFooter() {
    footer.innerHTML = createFooterContent();
}

// Function to create and return footer content
function createFooterContent() {
    return /* html */`
            <div class="footerLeft">
            <img src="./images/logo.png">
            <div class="socialLinks">
                <ul>
                    <li><a href="https://github.com/jasmindedic/instagram-clone" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/?lang=de" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://de-de.facebook.com/login.php/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="footerRight">
            <ul class="normalLinks">
                <li><a href="#">About us</a></li>
                <li><a href="#">Karriere</a></li>
                <li><a href="#">In progress</a></li>
                <li><a href="#">Get in touch</a></li>
            </ul>
            <ul class="normalLinks">
                <li><a href="#">New stuff</a></li>
                <li><a href="#">Our headquarter</a></li>
                <li><a href="#">We spend</a></li>
                <li><a href="#">Email us</a></li>
            </ul>
        </div>
    `;
}