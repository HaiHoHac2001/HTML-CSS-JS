var images = document.querySelectorAll('.img__list img')
var close = document.querySelector('.close__icon')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var gallery = document.querySelector('.gallery')
var galleryIMG = document.querySelector('.gallery__inner img')

var currentIndex = 0;

function showgallery(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    // display
    galleryIMG.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item,index)=>{
    item.addEventListener('click',function() {
        currentIndex = index 
        showgallery()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

// bam nut esc de exit
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if(currentIndex>0){
        currentIndex--
        showgallery()      
    }

})
next.addEventListener('click',function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showgallery()      
    }

})