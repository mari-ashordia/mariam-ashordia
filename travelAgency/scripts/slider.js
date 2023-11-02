let sliderIndex = 1;
sliderFunction(sliderIndex);

function moveSlider(num){
    sliderFunction(sliderIndex += num);
}

function moveSliderUsingDots(num){
    sliderFunction(sliderIndex = num);
}

function sliderFunction(num){
    let slideArr = document.getElementsByClassName("slides");
    let dotArr = document.getElementsByClassName("dot");

    if(num > slideArr.length){
        sliderIndex = 1;
    }
    if(num < 1){
        sliderIndex = slideArr.length;
    }

    for(let i = 0; i < slideArr.length; i++){
        slideArr[i].style.display = "none";
    }
    for(let i = 0; i < dotArr.length; i++){
        dotArr[i].className = dotArr[i].className.replace("active","");
    }
    slideArr[sliderIndex - 1].style.display = "block";
    dotArr[sliderIndex - 1].className += "active";
}
