var productInfor = [
    {
        id: "MA01",
        imageBig: "./imgs/minkaAireFan01.jpg",
        imageSmall: "./imgs/minkaAireFanS01.jpg",
        title: "Minka-Aire F736L-BS/SDBK Gear 54\" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish",
        rating: 4,
        reviews: 5,
        price: 499.95,
        listPrice: null,
        color: "Brushed Steel/Sand Black",
        brand: "MINKA-AIRE",
        LxWxH: "56 x 54 x 16 inches",
        material: "Material: Other",
        controllerType: "Remote Control",
        finishType: "",
        youSave: "",
        bestSeller: true,
        forSale: "",
        sale: false,
        new: false,
    }
];

function tableInfor() {
    var inforTable = "";
    inforTable += "<tr>\n" +
        "                                <td>Price:</td>\n" +
        "                                <td style=\"color: darkred\"> $"+productInfor[0].price+"</td>\n" +
        "                                <td>(<strike style=\"color:#000;\">$"+productInfor[0].forSale+"</strike>)</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td>You save: </td>\n" +
        "                                <td style=\"color: darkred\"> $"+productInfor[0].youSave+"</td>\n" +
        "                                <td>("+(productInfor[0].youSave/productInfor[0].price*100)+"%)</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td><strong>Color</strong></td>\n" +
        "                                <td>"+productInfor[0].color+"</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <th>Brand</th>\n" +
        "                                <td>"+productInfor[0].brand+"</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <th>Item Dimensions LxWxH</th>\n" +
        "                                <td>"+productInfor[0].LxWxH+"</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <th>Material</th>\n" +
        "                                <td>"+productInfor[0].material+"</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <th>Controller Type</th>\n" +
        "                                <td>"+productInfor[0].controllerType+"</td>\n" +
        "                            </tr>";
    return inforTable;
}
var tableInfor_html = document.getElementById("table_information");
tableInfor_html.innerHTML = tableInfor();
