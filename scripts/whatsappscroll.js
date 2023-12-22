document.addEventListener("DOMContentLoaded", function () {
    let whatsappButton = document.querySelector(".whatsapp-button");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            whatsappButton.style.left = "45px";
            whatsappButton.style.bottom = "-8px";
        } else {
            whatsappButton.style.left = "-220px";
            whatsappButton.style.bottom = "-220px";
        }
    });

});
