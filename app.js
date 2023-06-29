var i = 0;
var images = [];    
var time = 5000;

images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';
images[4] = 'img7.jpg';
images[5] = 'img8.jpg';
images[6] = 'P1.jpg';
images[7] = 'P2.jpg';
images[8] = 'P3.jpg';
images[9] = 'P4.jpg';
images[10] = 'P5.jpg';



function changeImage(){
    document.slide.src = images[i];

    if(i< images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage;

