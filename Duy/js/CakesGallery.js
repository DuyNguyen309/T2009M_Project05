var gallery = [
    {
        image:"imgs/cake11.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake03.jpg",
        position:0,
        height:"100%",
        width:"auto"
    },
    {
        image:"imgs/cake06.jpg",
        position:0,
        height:"100%",
        width:"auto"
    },
    {
        image:"imgs/cake04.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake10.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake17.jpg",
        position:"-30px",
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake07.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake12.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake05.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake18.jpg",
        position:0,
        height:"100%",
        width:"auto"
    },
    {
        image:"imgs/cake08.jpg",
        position:0,
        height:"100%",
        width:"auto"
    },
    {
        image:"imgs/cake15.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake02.jpg",
        position:"-50px",
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake16.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake14.jpg",
        position:"-70px",
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake19.jpg",
        position:0,
        height:"100%",
        width:"auto"
    },
    {
        image:"imgs/cake09.jpg",
        position:"-20px",
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake01.jpg",
        position:"-20px",
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake13.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
    {
        image:"imgs/cake20.jpg",
        position:0,
        height:"auto",
        width:"100%"
    },
];

var ReturnMain = (arr) =>{
    var returnHTML = "";
    for(var i = 0; i < arr.length; i++){
        returnHTML += "<div class=\"items-block\">\n" +
            "        <div class=\"items\">\n" +
            "            <img class=\"images\" src=\""+arr[i].image+"\" style=\"top:"+arr[i].position+";height:"+arr[i].height+";width:"+arr[i].width+"\">\n" +
            "        </div>\n" +
            "    </div>";
    }
    return returnHTML;
};
var mainGallery = document.getElementById("main__container");
mainGallery.innerHTML = ReturnMain(gallery);

function ReturnIframe(){
    return "<div class=\"exit-icon\" id=\"exit-icon\"><i class=\"fas fa-times fa-2x\"></i></div>\n" +
        "    <div class=\"arrow-left\" id=\"arrow-left\"><i class=\"fas fa-chevron-left fa-4x\"></i></div>\n" +
        "    <div class=\"arrow-right\" id=\"arrow-right\"><i class=\"fas fa-chevron-right fa-4x\"></i></div>\n" +
        "    <div class=\"iframe__img\"><img id=\"image-swap\" src=\"\" style=\"height:100%\"></div>";
}

var iFrame = document.getElementById("iframe");
iFrame.innerHTML = ReturnIframe();

var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
exitIcon = document.getElementById("exit-icon");
exitIcon.addEventListener("click",function(){
    iFrame.style.width = "0";
    exitIcon.style.display = "none";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
});

var imgs = document.getElementsByClassName("images");
var imageSwap = document.getElementById("image-swap");

function ClickImage(e){
    var src = e.target.getAttribute("src");
    iFrame.style.width = "100%";
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
    exitIcon.style.display = "block";
    imageSwap.src = src;
}
function RunClickImage(){
    for(var i = 0;i < imgs.length; i++){
        imgs[i].addEventListener("click",ClickImage);
    }
}
RunClickImage();

function slideImageLeft(){
    arrowLeft.addEventListener("click",function(){
        for(var i = 0;i < imgs.length;i++){
            if(imgs[i].src == imageSwap.src) {
                var x = i;
                break;
            }
        }
        if(x==0)
            x=20;
        imageSwap.src = imgs[x-1].src;
    })
}
slideImageLeft();

function slideImageRight(){
    arrowRight.addEventListener("click",function(){
        for(var i = 0; imgs.length;i++){
            if(imgs[i].src == imageSwap.src) {
                var x = i;
                break;
            }
        }
        if(x==19)
            x=-1;
        imageSwap.src = imgs[x+1].src;
    })
}
slideImageRight();