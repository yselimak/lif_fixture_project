let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');


items.onclick = function(){
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 50000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})




//coutdown
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

console.log(days,hours,minutes,seconds);

let coutDownDate = new Date("Oct 28, 2024 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = coutDownDate - now;

    let d = Math.floor(distance/(1000*60*60*24));
    let h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let m = Math.floor((distance % (1000*60*60)) / (1000*60));
    let s = Math.floor((distance % (1000*60))/1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (distance<0){
        clearInterval(x);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }

},1000);



//click bar for mobile
let i_bar = document.getElementById('i_bar');

i_bar.onclick = function(){
    showMobileBar();
}

function showMobileBar(){
    
}