let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let night = document.querySelector('.night');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    night.style.fontsize = value + 'px';
    if(scrollY >= 67){
        night.style.fontsize = 67 + 'px';
        night.style.position = 'fixed';
        if(scrollY >= 478){
            night.style.display = 'none';
        }else{
            night.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #28055f)';
        }
    }
}