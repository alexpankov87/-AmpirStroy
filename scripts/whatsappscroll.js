document.addEventListener("DOMContentLoaded", function () {
    var whatsappButton = document.querySelector(".whatsapp-button");
    var whatsappLink = document.getElementById("whatsappLink");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            whatsappButton.style.left = "45px";
            whatsappButton.style.bottom = "10px";
        } else {
            whatsappButton.style.left = "-220px";
            whatsappButton.style.bottom = "-220px";
        }
    });

});
