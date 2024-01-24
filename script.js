
window.addEventListener('keydown',function(e){
    
    let key = document.querySelector(`.key[data-key="${e.code}"]`)
    let audio = document.querySelector(`audio[data-key="${e.code}"]`)
     if(!audio) return
     audio.currentTime = 0;
     audio.play()
     key.classList.add('animation')

})

let key = document.querySelectorAll('.key')
key.forEach(key => key.addEventListener('transitionend',removeTransition))

function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('animation')
}