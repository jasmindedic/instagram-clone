// Global variables
let contentContainer = document.querySelector(".content");
let mainContent = document.querySelector(".mainContent");
let sidebar = document.querySelector(".sidebar");


// init function to invoke all generating html functions at once
function init() {
    generateHeader();
    render();
}

// Function to render functions that create html content
function render() {
    mainContent.innerHTML += generateTopProfileBar();
}

// Function to generate top profile bar
function generateTopProfileBar() {
    return /* html */`
        <div class="topProfileBar">
            <div class="topProfileContainer">
                <img class="profileImg" src="./images/profile-pic2.jpg">
                <p>Ben_Kaik</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg" src="./images/profile-pic3.jpg">
                <p>Antonio_Quadio</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg" src="./images/profile-pic4.jpg">
                <p>Anne_marie</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg" src="./images/profile-pic5.jpg">
                <p>Franzi_19</p>
            </div>
        </div>
    `;
}