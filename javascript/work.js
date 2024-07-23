let items = document.querySelectorAll('.list .item')
let thumbnails = document.querySelectorAll('.work__thumbnail .work__card')
let next = document.getElementById('next')
let prev = document.getElementById('previous')

//params:
let count = items.length;
let ActiveIndex = 0;

function refresh(){
    let oldItemActive = document.querySelector('.list .item.active')
    let oldThumbActive = document.querySelector('.work__thumbnail .work__card.active')
    oldItemActive.classList.remove('active')
    oldThumbActive.classList.remove('active')
    
    items[ActiveIndex].classList.add('active')
    thumbnails[ActiveIndex].classList.add('active')
    //once clicked on thumbnail or one of the arrows stop auto scroll:
    clearInterval(auto);
    auto = setInterval(()=>{
        next.click();
    },15000)
}
next.onclick = function(){
    ActiveIndex = ActiveIndex+1
    if(ActiveIndex >= count){
        ActiveIndex = 0
    }
    refresh();
}
prev.onclick = function(){
    ActiveIndex = ActiveIndex-1
    if(ActiveIndex < 0){
        ActiveIndex = count-1
    }
    refresh();
}

//onclick(for mobile phones and tablets)
thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
        ActiveIndex = index
        refresh();
    })
})

//auto scroll
let auto = setInterval(()=>{
    next.click();
},10000)