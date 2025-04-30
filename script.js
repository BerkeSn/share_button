const shareButton = document.querySelector(".share-button");
const socialsWrapper = document.querySelector(".socials-wrapper");

shareButton.addEventListener("click", () => {
    socialsWrapper.classList.toggle("active");

    let shareButtonImage = shareButton.querySelector("img");


    if (socialsWrapper.classList.contains("active")) {
        shareButtonImage.src = "assets/close.svg";
    } else {
        shareButtonImage.src = "assets/share.svg";
    }

});
