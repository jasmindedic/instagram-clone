// Global variables
let contentContainer = document.querySelector(".content");
let mainContent = document.querySelector(".mainContent");
let topProfileBar = document.querySelector(".topProfileBar");
let sidebar = document.querySelector(".sidebar");


// init function to invoke all generating html functions at once
function init() {
    generateHeader();
    render();
}

// Function to render functions that create html content
function render() {
    topProfileBar.innerHTML += generateTopProfileBar();
    generatePosts();
    generateSidebar();
}

// Function to generate top profile bar
function generateTopProfileBar() {
    return /* html */`
            <div class="topProfileContainer">
                <img class="profileImg topBarImg" src="./images/profile-pic2.jpg">
                <p>Ben_Kaik</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg topBarImg" src="./images/profile-pic3.jpg">
                <p>Antonio_Quadio</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg topBarImg" src="./images/profile-pic4.jpg">
                <p>Anne_marie</p>
            </div>
            <div class="topProfileContainer">
                <img class="profileImg topBarImg" src="./images/profile-pic5.jpg">
                <p>Franzi_19</p>
            </div>
    `;
}

// Function to generate posts (invoking createPostContent function)
function generatePosts() {
    for (let i = 0; i < names.length; i++) {

        let postContainer = document.querySelector(".postContainer");
        // Get right index directly into variable
        let profileImage = profileImages[i];
        let name = names[i];
        let location = locations[i];
        let image = images[i];
        let likeAmount = likesAmount[i];
        let comment = comments[i];


        postContainer.innerHTML += createPostContent(profileImage, name, location, image, likeAmount, comment);
    }

}

// Function to create return content for post
function createPostContent(profileImage, name, location, image, likeAmount, comment) {
    return /* html */`
        <div class="post">
            <div class="profileRow">
                <div class="userInfo">  
                <img class="profileImg" src="${profileImage}">
                    <div class="nameLocation">
                        <p>${name}</p>
                        <p class="location">${location}</p>
                    </div>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="imagePostContainer">
                <img class="imagePost" src="${image}">
            </div>
            <div class="threeBtnContainer">
                <i class="fa-solid fa-heart threeBtn"></i>
                <i class="fa-solid fa-comment threeBtn"></i>
                <i class="fa-solid fa-location-arrow threeBtn"></i>
            </div>
            <div class="likesAmount">
                <p>Gefällt ${likeAmount} Mal</p>
            </div>
                <hr>
            <div class="commentArea">
                <i class="fa-solid fa-face-smile"></i>
                <input type="text" placeholder="Type your comment">
                <button class="postBtn">Posten</button>
            </div>
        </div>
    `;
}

// Function to generate sidebar (invoking createSidebarContent() function)
function generateSidebar() {
    for (let i = 0; i < followerNames.length; i++) {
        let sidebarContent = document.querySelector(".sidebarContent");

        // Get right index directly into variable
        let profileImage = profileImages[i];
        let name = names[i];
        let followerName = followerNames[i];

        sidebarContent.innerHTML += createSidebarContent(profileImage, name, followerName);
    }
}

// Function to create and return sidebar content
function createSidebarContent(profileImage, name, followerName) {
    return /* html */`
        <div class="followExample">
            <img class="profileImg" src="${profileImage}">
            <div class="followNames">
                <p>${name}</p>
                <p>${followerName} ist follower</p>
            </div>
            <p class="follow">Folgen</p>
        </div>
    `;
}