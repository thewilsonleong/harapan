

const displayText = document.querySelector('#inputText')

function displayHope() {
    document.getElementById('showHere').innerText = inputText.value;
    // document.getElementById('showHere').style.textTransform = 'uppercase'
}

displayText.addEventListener('input', displayHope)
