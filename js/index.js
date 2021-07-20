const circle = document.querySelector('.circle');

function imgSlider(image){
    document.querySelector('.starbucks').src = './images/'+image;
    
    switch(image){
        case 'img1.png':
            circle.style.background= '#017143';
            break;
        case 'img2.png':
            circle.style.background= '#eb7495';
            break; 
        case 'img3.png':
            circle.style.background= '#d752b1';
            break; 
    }    
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    
    navigation.classList.toggle('active');
}