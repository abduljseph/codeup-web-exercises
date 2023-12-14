// setTimeout(function() {
//     document.getElementById("profile-pic").setAttribute("src", "new_image.jpg");
// }, 2000);

// setTimeout(function() {
//     document.getElementById("profile-name").innerHTML = "New Name";
// }, 4000); // 4000 milliseconds is 4 seconds

// // code below did not work
// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         document.querySelector(".profile-name").innerHTML = "New Name";
//     }, 4000);
// });

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("#profile-desc").classList.add("highlight-desc");
    }, 6000);
});
