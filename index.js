

const circle = document.querySelector('.progress_circle');
const radius = circle.r.baseVal.value; //берем значение радиуса у элемента progress
console.log(radius)
const circumference = 2 * Math.PI * radius //длина окружности
console.log(circumference)
const inputPrecent = document.querySelector('.inputPrecent')
const toggleButtonAnimate = document.querySelector('#toggle-button-animate') 
const toggleButtonHidden = document.querySelector('#toggle-button-hidden')
const progressBackground = document.querySelector('.progressBackground')


const changeHandler = (e) => {
    const value = e.value
    e.value = value.replace(/\D/g, '')

    if(e.value < 0) {e.value = 0};
    if(e.value > 100) {e.value = 100};

    if(inputPrecent.value <= 100){
        setProgress(inputPrecent.value)
    }
}



circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference


function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset;
}

toggleButtonAnimate.addEventListener('click', () => {
    if(!circle.classList.contains('animateCircle')){
        circle.classList.add('animateCircle')
        document.querySelector('.inputPrecent').disabled = true
        document.querySelector('.inputPrecent').value = ''
        circle.style.strokeDashoffset = 747.6990515543707
        
    }
    else{
        circle.classList.remove('animateCircle')
        document.querySelector('.inputPrecent').disabled = false
    }
})

toggleButtonHidden.addEventListener('click', () => {
    if(!circle.classList.contains('circkeHidden')){
        circle.classList.add('circkeHidden')
        progressBackground.classList.add('circkeHidden')
    }
    else{
        circle.classList.remove('circkeHidden')
        progressBackground.classList.remove('circkeHidden')
    }
})

