const imageSlider = $('.imageSlider')
const sliderImages = $('.imageSlider img')
const prevBtn = $('#prevBtn')
const nextBtn = $('#nextBtn')

let counter = sliderImages.length //counter prati koja slika je u fokusu, pomoću njega tu sliku selectamo
let slideWidth = 0
let direction

const slide = (slideWidth)=>{
    imageSlider.css('transform', `translateX(${slideWidth}px)`)
}

const getImgWidth = (counter)=>{
    let activeImgWidth = $(`#img${counter}`).outerWidth() //
    return activeImgWidth
}

prevBtn.on('click',function(){
    
        direction = 'left'
        let activeImgWidth = getImgWidth(counter)
        if(counter === 1){
            counter = sliderImages.length
        }else{
           --counter 
        }
        slideWidth = activeImgWidth
        slide(slideWidth)
})

nextBtn.on('click',function(){
        direction = 'rigth'
        if(counter === sliderImages.length){
            counter = 1
        }else{
            ++counter
        }
        let nextImgWidth = getImgWidth(counter)
        slideWidth = -(nextImgWidth)
        slide(slideWidth)
})

imageSlider.on('transitionend', function(){
    if(direction === 'left')
        imageSlider.prepend($('.imageSlider img:last-child'))
    else if(direction === 'rigth') 
        imageSlider.append($('.imageSlider img:first-child'))

    imageSlider.css('transition', 'none')     
    imageSlider.css('transform', `translateX(0px)`)
    setTimeout(function(){
        imageSlider.css('transition', 'all 0.2s') 
    })
})


