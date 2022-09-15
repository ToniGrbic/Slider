import './scss/styles.scss'
import './scss/content.scss'
import './scss/header-footer.scss'

const imageSliderTop = $('.topSlider')
const imageSliderBottom = $('.bottomSlider')
const leftBtn = $('#leftBtn')
const rightBtn = $('#rightBtn')
const topImgCount = $('.topSlider img').length
const bottomImgCount = $('.bottomSlider img').length

//counter prati koja slika je u fokusu, pomoću njega tu sliku selectamo
let counterTop = topImgCount
let counterBottom = bottomImgCount 

/*označava koji button je kliknut, 
pomoću njega provjeravamo dali treba prependat ili appendat slike*/
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

const slideToBegining = ()=>{
    /*kada dodamo sliku nakon slide tranzicije 
    želimo vratit poziciju na početak ali bez tranzicije*/
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
        //fokusiranu sliku za pojedini slider stavljamo na kraj
        imageSliderTop.prepend($('.topSlider img:last-child'))
        imageSliderBottom.prepend($('.bottomSlider img:last-child'))
    }   
    else if(direction === 'left') {
        //zadnju sliku za pojedini slider stavljamo na početak
        imageSliderTop.append($(`.topSlider img:first-child` ))
        imageSliderBottom.append($('.bottomSlider img:first-child'))
    }
    slideToBegining() 
    setTimeout(()=>{
        rightBtn.removeAttr("disabled")
        leftBtn.removeAttr("disabled")
    })
    
}
