const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter
const clearButton = document.getElementById('clear-button')

playButton.addEventListener('click', () =>{
    playText(textInput.value)
})

pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance(text)
utterance.addEventListener('end', () =>{
    textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})

function playText(text){
    
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }

    utterance.text = text
    utterance.rate = speedInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText(){
    if(speechSynthesis.speak) speechSynthesis.pause()
}

function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}