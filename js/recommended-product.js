function recommended_product() {
    var recommended_html = "";
    for (var i=0;i<10;i++){
        recommended_html+="<div class=\"main__item\">\n" +
            "                                    <a href=\"\"><img src=\"https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg\" alt=\"\"/></a>\n" +
            "                                    <a class=\"main__itemTitle\" href=\"\">Minka-Aire F736L-BS/SDBK Gear 54\" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>\n" +
            "                                    <div class=\"main__itemRating\">\n" +
            "                                        <div class=\"main__itemWhiteStar\">\n" +
            "                                            <p class=\"main__itemYellowStar\"></p>\n" +
            "                                        </div>\n" +
            "                                        <a class=\"main__itemReview\" href=\"\">210</a>\n" +
            "                                    </div>\n" +
            "                                    <p class=\"main__itemPrice\">$64.53</p>\n" +
            "                                </div>";
    }
    return recommended_html;
}
var recommended = document.getElementById("recommended")
recommended.innerHTML = recommended_product();

let leftButtons = document.querySelectorAll(".main__carouselArrowLeft");
let rightButtons = document.querySelectorAll(".main__carouselArrowRight");
let mainCarouselSlide = document.querySelectorAll(".main__carouselSlide");

mainCarouselSlide.forEach((a, i) => {
    let count = 1;
    let carouselWidth = a.clientWidth;
    leftButtons[i].addEventListener("click", () => {
        if (count == 1) {
            return;
        }
        count--;
        mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
        mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
    })
    rightButtons[i].addEventListener("click", () => {
        if (count == 3) {
            return;
        }
        console.log(count);
        count++;
        mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
        mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
    })
})
