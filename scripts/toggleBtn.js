//retrieving the relevant elements
let littleDot = document.querySelector('.littleDot');
let inputs = document.querySelectorAll('.toggleBtn__bar>input[type="radio"]');


inputs.forEach(function(input) {
    input.addEventListener('change', function() {
        //if each of the numbers is selected, move the dot accordingly
        if(input == inputs[0] && input.checked) {
            littleDot.style.left = '0px';
        }else if(input == inputs[1] && input.checked) {
            littleDot.style.left = '30px';
        }else if(input == inputs[2] && input.checked) {
            littleDot.style.left = '65px';
        }
    });
});

window.addEventListener("load", () => {
    const chosenTheme = localStorage.getItem('theme');
    if(chosenTheme == 'Theme1'){
        littleDot.style.left = '0px';
    }else if(chosenTheme == 'Theme2'){
        littleDot.style.left = '30px';
    }else if(chosenTheme == 'Theme3'){
        littleDot.style.left = '65px';
    }
})