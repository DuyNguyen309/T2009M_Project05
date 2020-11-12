var ReturnNav = () =>{
    return "<div class=\"container nav-menu__container\">\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"../Home.html\" title=\"Alessi Bakery\"><img src=\"../imgs%20pr5/alessi-logo.png\" alt=\"Home Page\"></a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">CATERING</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">BAKERY</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">DELI</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">CAKES</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">ABOUT</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">CONTACT</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\">GIVING BACK</a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"https://www.facebook.com/AlessiBakeries/\" class=\"icon-links\"><i class=\"fab fa-facebook-f\"></i></a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"https://twitter.com/alessibakery?lang=en\" class=\"icon-links\"><i class=\"fab fa-twitter\"></i></a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"https://www.instagram.com/alessibakery/\" class=\"icon-links\"><i class=\"fab fa-instagram\"></i></a>\n" +
        "        </div>\n" +
        "        <div class=\"flex-items\">\n" +
        "            <a href=\"#\" class=\"order-btn\">\n" +
        "                <img src=\"../imgs%20pr5/order-now-btn.png\">\n" +
        "                <span class=\"order-btn__name\">ORDER ONLINE</span>\n" +
        "            </a>\n" +
        "        </div>\n" +
        "    </div>";
};
var navMenu = document.getElementById("nav-menu");
navMenu.innerHTML = ReturnNav();