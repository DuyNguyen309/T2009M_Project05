function ReturnIframe(){
    return "<div class=\"close-button\" id=\"close-button\"><i class=\"fas fa-times fa-2x\"></i></div>\n" +
        "    <div class=\"iframe__img\"><img src=\"imgs/weekly-special.jpg\"></div>";
}
var iFrame = document.getElementById("iframe");
iFrame.innerHTML = ReturnIframe();

var closeButton = document.getElementById("close-button");
var specialImg = document.getElementById("weekly-specials-img");

function OpenIframe(){
    specialImg.onclick = function(){
        iFrame.style.height = "100%";
        closeButton.style.display = "block";
    }
}
OpenIframe();

function CloseIframe(){
    closeButton.addEventListener("click",function(){
        iFrame.style.height = "0";
        closeButton.style.display = "none";
    })
}
CloseIframe();