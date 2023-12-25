
//function to include html in popup
function displayPopup () {
    let html = '<div id="popupSetting"><span id="close" onClick="closePopup()"><img id="closeIcon" src="Images/Icons/close.png" alt="close"></span><img id="leftIcon" src="Images/Icons/left.png" alt="left"><img id="rightIcon" src="Images/Icons/right.jpg" alt="right"><img id="mainPopupImage" src="Images/Virat.jpg" alt="viratkohli"></div>';

    let popDiv = document.createElement("div");
    popDiv.innerHTML = html;
    document.body.insertBefore(popDiv, document.body.firstChild);
}

let img;
let current;

document.addEventListener('click', function (event) {
    if (event.target.id === 'rightIcon') {
        nextImage();
    } else if (event.target.id === 'leftIcon') {
        prevImage();
    }
});

function nextImage() {
    getCurrentImage();
    current++;
    document.getElementById('mainPopupImage').src = img[current].src;
    checkArrow();
}

function prevImage() {
    getCurrentImage();
    current--;
    document.getElementById('mainPopupImage').src = img[current].src;
    checkArrow();
}

//get current image
function getCurrentImage() {
for(var i=0; i< img.length; i++) {
    if(img[i].src == document.getElementById("mainPopupImage").src) {
        current = i;
    }
}
}
function imagePopupInit(target) {

    //select all images with class target
    img = document.getElementsByClassName(target);

    //Add event listener on all selected images
    for(var x=0; x<img.length ;x++) 
    {
        img[x].style.cursor = 'pointer'

        //add even listener
        img[x].addEventListener("click", function() {
            document.getElementById("mainPopupImage").src = this.src;
            document.getElementById("popupSetting").style.display = 'block';
            checkArrow();
        })
    }
    displayPopup();
}

function closePopup() {
    document.getElementById("mainPopupImage").src = "";
            document.getElementById("popupSetting").style.display = "none";
}

function checkArrow() {
    getCurrentImage();
    console.log(current);
    if(current == 0) {
        document.getElementById("leftIcon").style.display= "none";
        document.getElementById("rightIcon").style.display= "block";
    }
   else if(current == img.length - 1) {
        document.getElementById("rightIcon").style.display= "none";
        document.getElementById("leftIcon").style.display= "block";
        
    }
    else {
        document.getElementById("leftIcon").style.display= "block";
        document.getElementById("rightIcon").style.display= "block";
    }
}