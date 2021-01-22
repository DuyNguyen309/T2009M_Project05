var star = [
    {
        name: "5 stars",
        width: 0.36,
    },
    {
        name: "4 stars",
        width: 0.22,
    },
    {
        name: "3 stars",
        width: 0.21,
    },
    {
        name: "2 stars",
        width: 0.21,
    },
    {
        name: "1 star",
        width: 0,
    }
];
function recommended_star() {
    var recommended_star = "";
    for (i=0;i<star.length;i++){
        recommended_star +="<div class=\"box_stars_rv\">\n" +
            "                        <table>\n" +
            "                            <td class=\"customer_rv_tb\"><span>"+star[i].name+"</span></td>\n" +
            "                            <td>\n" +
            "                                <div class=\"a-metter\" role=\"progressbar\" aria-valuenow=\"33%\">\n" +
            "                                    <div class=\"a-metter-bar\" style=\"width: "+(star[i].width*100)+"%\"></div>\n" +
            "                                </div>\n" +
            "                            </td>\n" +
            "                            <td class=\"customer_rv_tb\"><span class=\"percent_rv\">"+(star[i].width*100)+"%</span></td>\n" +
            "                        </table>\n" +
            "                    </div>";
    }
    return recommended_star;
}
var Star_metter = document.getElementById("recommendedStar");
Star_metter.innerHTML = recommended_star();

function index_Star() {
    var indexS = "";
    indexS += (star[0].width*5+star[1].width*4+star[2].width*3+star[3].width*2+star[4].width).toFixed(1);
    return indexS;
}
var index_html = document.getElementById("index_stars");
index_html.innerHTML = index_Star();


function star_inside() {
    var starInside = "";
    starInside +="<div class=\"star_inside\" style=\"width: "+((star[0].width*5+star[1].width*4+star[2].width*3+star[3].width*2+star[4].width)/5*100)+"%\"></div>";
    return starInside;
}
var starInside_html = document.getElementById("return_inside");
starInside_html.innerHTML = star_inside();