var gallery = [
    {
        image:"imgs/hamburger01.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger02.jpg",
        height:"auto",
        width:"100%",
    },
    {
        image:"imgs/hamburger03.jpg",
        height:"auto",
        width:"100%",
    },
    {
        image:"imgs/hamburger04.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger05.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger06.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger07.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger08.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger09.jpg",
        height:"auto",
        width:"100%",
    },
    {
        image:"imgs/hamburger10.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger11.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger12.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger13.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger14.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger15.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger16.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger17.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger18.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger19.png",
        height:"100%",
        width:"auto",
    },
    {
        image:"imgs/hamburger20.png",
        height:"100%",
        width:"auto",
    },
];

function ReturnMain(arr){
    var mainHTML = "";
    for(var i = 0;i < arr.length;i++){
        mainHTML += "<div class=\"items-block\">\n" +
            "            <div class=\"items\">\n" +
            "                <img class=\"images\" src=\""+arr[i].image+"\" style=\"width:"+arr[i].width+";height:"+arr[i].height+"\"/>\n" +
            "            </div>\n" +
            "        </div>";
    }
    return mainHTML;
}
var mainGallery = document.getElementById("main__container");
mainGallery.innerHTML = ReturnMain(gallery);

function ReturnIframe(){
    return "<div class=\"close-button\" id=\"close-button\"><i class=\"fas fa-times fa-2x\"></i></div>\n" +
        "    <div class=\"arrow-left\" id=\"arrow-left\"><i class=\"fas fa-chevron-left fa-4x\"></i></div>\n" +
        "    <div class=\"arrow-right\" id=\"arrow-right\"><i class=\"fas fa-chevron-right fa-4x\"></i></div>\n" +
        "    <div class=\"iframe__img\"><img id=\"image-swap\" src=\"\"></div>";
}
var iFrame = document.getElementById("iframe");
iFrame.innerHTML = ReturnIframe();

var imageSwap = document.getElementById("image-swap");
var imgs = document.getElementsByClassName("images");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var closeButton = document.getElementById("close-button");

function ImageClick(e){
    var a = e.target.getAttribute("src");
    iFrame.style.width = "100%";
    closeButton.style.display = "block";
    arrowRight.style.display = "block";
    arrowLeft.style.display = "block";
    imageSwap.src = a;
}
function OpenIframe(){
    for(var i = 0;i < imgs.length;i++){
        imgs[i].addEventListener("click",ImageClick);
    }
}
OpenIframe();

function CloseIframe(){
    closeButton.onclick = function(){
        iFrame.style.width = "0";
        closeButton.style.display = "none";
        arrowRight.style.display = "none";
        arrowLeft.style.display = "none";
    }
}
CloseIframe();

function SlideImageLeft(){
    arrowLeft.addEventListener("click",function(){
        for(var i = 0;i < imgs.length;i++){
            if(imgs[i].src == imageSwap.src){
                var x = i;
                break;
            }
        }
        if(x == 0)
            imageSwap.src = imgs[19].src;
        else
            imageSwap.src = imgs[x-1].src;
    })
}
SlideImageLeft();

function SlideImageRight(){
    arrowRight.addEventListener("click",function(){
        for(var i = 0;i < imgs.length;i++){
            if(imgs[i].src == imageSwap.src){
                var x = i;
                break;
            }
        }
        if(x == imgs.length - 1)
            imageSwap.src = imgs[0].src;
        else
            imageSwap.src = imgs[x+1].src;
    })
}
SlideImageRight();