// Global variables
let contentContainer = document.querySelector(".content");
let mainContent = document.querySelector(".mainContent");
let topProfileBar = document.querySelector(".topProfileBar");
let sidebar = document.querySelector(".sidebar");


// init function to invoke all generating html functions at once
function init() {
    generateHeader();
    generateFooter()
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
                <img class="profileImg topBarImg" src="./images/profile-pic11.jpg">
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
    let postContainer = document.querySelector(".postContainer");

    postContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        postContainer.innerHTML += createPostContent(i, post);

        /* Second for loop for comments */
        let commentContainer = document.getElementById(`commentContainer${i}`);

        for (let j = 0; j < post["comments"].length; j++) {
            let comment = post["comments"][j];

            commentContainer.innerHTML += `
                <div class="commentInnerContainer" id="commentInnerContainer${i}">
                    <p class="commentCreator">${post["name"]}:</p>
                     ${comment} 
                </div>
            `;
        }
    }

}

// Function to create return content for post
function createPostContent(i, post) {
    return /* html */`
        <div class="post">
            <div class="profileRow">
                <div class="userInfo">  
                <img class="profileImg" src="${post["profileImage"]}">
                    <div class="nameLocation">
                        <p>${post["name"]}</p>
                        <p class="location">${post["location"]}</p>
                    </div>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="imagePostContainer">
                <img class="imagePost" src="${post["image"]}">
            </div>
            <div class="threeBtnContainer">
                <i class="fa-solid fa-heart threeBtn heart" id="heart${i}" onclick="toggleLike(${i})"></i>
                <i class="fa-solid fa-comment threeBtn"></i>
                <i class="fa-solid fa-location-arrow threeBtn"></i>
            </div>
            <div class="likesAmount">
                <p id="likeCounter${i}">Gefällt ${post["likes"]} Mal</p>
            </div>
            <div class="commentContainer" id="commentContainer${i}"></div>
                <hr>
            <div class="commentArea">
                <i class="fa-solid fa-face-smile"></i>
                <input type="text" placeholder="Type your comment" id="commentInput${i}" >
                <button class="postBtn" onclick="addComment(${i})">Posten</button>
            </div>
        </div>
    `;
}

// Function to generate sidebar (invoking createSidebarContent() function)
function generateSidebar() {

    let sidebarContent = document.querySelector(".sidebarContent");
    sidebarContent.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        let followerName = followerNames[i]
        let post = posts[i]
        sidebarContent.innerHTML += createSidebarContent(i, followerName, post);
    }
}

// Function to create and return sidebar content
function createSidebarContent(i, followerName, post) {
    return /* html */`
        <div class="followExample">
            <img class="profileImg" src="${post["profileImage"]}">
            <div class="followNames">
                <p>${post["name"]}</p>
                <p>${followerName}  ist follower</p>
            </div>
            <p class="follow" onclick="changeFollow(${i})">Folgen</p>
        </div>
    `;
}

/* Function to change follow to unfollow */
function changeFollow(i) {
    // Get element 
    let followElem = document.querySelectorAll(".follow");
    eachFollowElem = followElem[i];

    // Check what the current state is 
    if (eachFollowElem.innerHTML == "Folgen") {
        eachFollowElem.innerHTML = "Gefolgt";
    } else {
        eachFollowElem.innerHTML = "Folgen";
    }
}

// Function to post comment
function addComment(i) {
    // Get comment input field
    let commentInput = document.querySelector(`#commentInput${i}`);

    if (commentInput.value.length <= 0) {
        alert("Bitte keine leeren Kommentare posten");
    } else {
        posts[i]["comments"].push(commentInput.value);
        commentInput.value = "";
    }


    // Call post function to display typed comment
    generatePosts();
}


// Functions to increase / decrease likes
function toggleLike(i) {
    if (!posts[i]['isLiked']) {  // ist das gleiche wie ==false
        posts[i]['isLiked'] = true;
        addLike(i);
    }
    else {
        posts[i]['isLiked'] = false;
        removeLike(i);
    }

    // Change color of heart icon 
    let heart = document.getElementById(`heart${i}`);
    heart.classList.toggle("active")
}

function addLike(i) {
    let likeCounter = document.getElementById(`likeCounter${i}`)
    let likeCount = posts[i]['likes'];

    likeCount++;
    likeCounter.innerHTML = `
    Gefällt: ${likeCount} Mal
`
}

function removeLike(i) {
    let likeCounter = document.getElementById(`likeCounter${i}`)
    let likeCount = posts[i]['likes'];

    likeCounter.innerHTML = `
        Gefällt: ${likeCount} Mal
    `
}

// Function to search user
function searchUser() {
    let search = document.querySelector(".searchbar").value;
    search = search.toLowerCase();
    console.log(search);

    // Generating post content
    let postContainer = document.querySelector(".postContainer");

    postContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        if (post.name.toLocaleLowerCase().includes(search)) {
            postContainer.innerHTML += createPostContent(i, post);

            /* Second for loop for comments */
            let commentContainer = document.getElementById(`commentContainer${i}`);

            for (let j = 0; j < post["comments"].length; j++) {
                let comment = post["comments"][j];

                commentContainer.innerHTML += `
                <div class="commentInnerContainer" id="commentInnerContainer${i}">
                    <p class="commentCreator">${post["name"]}:</p>
                     ${comment} 
                </div>
            `;
            }

        }
    }
}