const imageSliderTop = $('.topSlider')
const imageSliderBottom = $('.bottomSlider')
const sliderImagesTop = $('.topSlider img')
const sliderImagesBottom = $('.bottomSlider img')
const prevBtn = $('#prevBtn')
const nextBtn = $('#nextBtn')

const topImgCount = sliderImagesTop.length
const bottomImgCount = sliderImagesBottom.length

//counter prati koja slika je u fokusu, pomoću njega tu sliku selectamo
let counterTop = topImgCount
let counterBottom = bottomImgCount 
let direction

const slide = (slideWidthTop, slideWidthBottom)=>{
    imageSliderTop.css('transform', `translateX(${slideWidthTop}px)`)
    imageSliderBottom.css('transform', `translateX(${slideWidthBottom}px)`)
}

const getTopImgWidth = (counter)=>{
    return $(`#img-top-${counter}`).outerWidth() 
}

const getBottomImgWidth = (counter)=>{
    return $(`#img-bottom-${counter}`).outerWidth() 
}

prevBtn.on('click',function(){
    
        direction = 'left'
        let activeTopImgWidth = getTopImgWidth(counterTop)
        let activeBottomImgWidth = getBottomImgWidth(counterBottom)

        if(counterTop === 1 && counterBottom > 1 ){
            counterTop = topImgCount
            --counterBottom
        }else if(counterBottom === 1 && counterTop > 1){
           counterBottom = bottomImgCount
           --counterTop
        }else if(counterBottom === 1 && counterTop === 1){
            counterTop = topImgCount
            counterBottom = bottomImgCount
        }else{
            --counterTop
            --counterBottom
        }
        slide(activeTopImgWidth, activeBottomImgWidth)
})

nextBtn.on('click',function(){

        direction = 'right'
        
        if(counterTop === topImgCount  && counterBottom < bottomImgCount){
            counterTop = 1
            ++counterBottom
        }else if(counterBottom === bottomImgCount && counterTop < topImgCount){
           counterBottom = 1
           ++counterTop
        }else if((counterTop === topImgCount) && (counterBottom === bottomImgCount)){
            counterTop = 1
            counterBottom = 1
        }else{
            ++counterTop
            ++counterBottom 
        }
        let nextImgWidthTop = getTopImgWidth(counterTop)
        let nextImgWidthBottom = getBottomImgWidth(counterBottom)
        slide(-nextImgWidthTop, -nextImgWidthBottom)
})

imageSliderBottom.on('transitionend', addImages)

function addImages(){
    if(direction === 'left'){
        imageSliderTop.prepend($('.topSlider img:last-child'))
        imageSliderBottom.prepend($('.bottomSlider img:last-child'))
    }   
    else if(direction === 'right') {
        imageSliderTop.append($(`.topSlider img:first-child` ))
        imageSliderBottom.append($('.bottomSlider img:first-child'))
    }
    $('.imageSlider div').css('transition', 'none')     
    $('.imageSlider div').css('transform', `translateX(0px)`)
    setTimeout(()=>{
        $('.imageSlider div').css('transition', 'all 0.5s') 
    }) 
}

