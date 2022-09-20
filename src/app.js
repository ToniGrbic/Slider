import './scss/styles.scss'
import './scss/content.scss'
import './scss/header-footer.scss'

const imageSliderTop = $('.topSlider')
const imageSliderBottom = $('.bottomSlider')
const leftBtn = $('#leftBtn')
const rightBtn = $('#rightBtn')
const topImgCount = $('.topSlider img').length
const bottomImgCount = $('.bottomSlider img').length

//counter follows what image is in focus, with him we can select that image
let counterTop = topImgCount
let counterBottom = bottomImgCount 

/*direction denotes what button is clicked,
  with this we can check do we have to prepend or append images */ 
let direction 

const getTopImgWidth = (counter)=>{
    return $(`#img-top-${counter}`).outerWidth() 
}

const getBottomImgWidth = (counter)=>{
    return $(`#img-bottom-${counter}`).outerWidth() 
}

const slide = (slideWidthTop, slideWidthBottom)=>{
    imageSliderTop.css('transform', `translateX(${slideWidthTop}px)`)
    imageSliderBottom.css('transform', `translateX(${slideWidthBottom}px)`)
}

const slideToBegining = ()=>{
    /*when we add an image after transition end,
    we want to set the position to the begining but without transition*/ 
    $('.imageSlider div').css('transition', 'none')     
    $('.imageSlider div').css('transform', `translateX(0px)`)
    setTimeout(()=>{
        $('.imageSlider div').css('transition', 'transform 0.5s') 
    })
}

const disableBtns = ()=>{
    rightBtn.attr("disabled", "disabled")
    leftBtn.attr("disabled", "disabled")
}

rightBtn.on('click',function(){
    disableBtns()
    direction = 'right'
    
    let focusedTopImgWidth = getTopImgWidth(counterTop)
    let focusedBottomImgWidth = getBottomImgWidth(counterBottom)

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
    slide(focusedTopImgWidth, focusedBottomImgWidth)
})

leftBtn.on('click',function(){
    disableBtns()
    direction = 'left'
    
    if(counterTop === topImgCount  && counterBottom < bottomImgCount){
        counterTop = 1
        ++counterBottom
    }else if(counterBottom === bottomImgCount && counterTop < topImgCount){
       counterBottom = 1
       ++counterTop
    }else if(counterTop === topImgCount && counterBottom === bottomImgCount){
        counterTop = 1
        counterBottom = 1
    }else{
        ++counterTop
        ++counterBottom 
    }
    let nextTopImgWidth = getTopImgWidth(counterTop)
    let nextBottomImgWidth = getBottomImgWidth(counterBottom)
    slide(-nextTopImgWidth, -nextBottomImgWidth)
})

imageSliderBottom.on('transitionend', addImages)

function addImages(){
    if(direction === 'right'){
        //move the focused image for each slider to the end(left side)
        imageSliderTop.prepend($('.topSlider img:last-child'))
        imageSliderBottom.prepend($('.bottomSlider img:last-child'))
    }   
    else if(direction === 'left') {
        //move the last image for each slider to the begining(right side)
        imageSliderTop.append($(`.topSlider img:first-child` ))
        imageSliderBottom.append($('.bottomSlider img:first-child'))
    }
    slideToBegining() 
    setTimeout(()=>{
        rightBtn.removeAttr("disabled")
        leftBtn.removeAttr("disabled")
    })
}
