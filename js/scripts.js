let getButton = document.querySelector('#button-mode')
let getStyle = document.getElementById('style')

getButton.addEventListener('click', function() {
    if(getButton.value == "Dark Mode") {
        getButton.value = "Light Mode"
        getStyle.setAttribute('href', 'styles/dark_style.css')
    }else {
        getStyle.setAttribute('href', 'styles/light_style.css')
        getButton.value = "Dark Mode"
    }
})