
var i = 0;
var images = [];    
var time = 3000;

images[0] = 'slide1.jpg';
images[1] = 'slide2.jpg';
images[2] = 'slide3.jpg';
images[3] = 'slide4.jpg';




function changeImage(){
    document.slide2.src = images[i];

    if(i< images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage;