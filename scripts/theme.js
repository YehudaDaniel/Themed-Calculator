document.addEventListener('DOMContentLoaded', function(event) {
    const toggles = document.querySelectorAll('.toggleBtn__bar>input[type="radio"]');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('change', function() {
            if(toggle == toggles[0] && toggle.checked){
                useTheme('Theme1');
                localStorage.setItem('theme', 'Theme1');
            }else if(toggle == toggles[1] && toggle.checked){
                useTheme('Theme2');
                localStorage.setItem('theme', 'Theme2');
            }else if(toggle == toggles[2] && toggle.checked){
                useTheme('Theme3');
                localStorage.setItem('theme', 'Theme3');
            }
        }, false);
    });

    const preferred = localStorage.getItem('theme');
    if(preferred == 'Theme1') {
        useTheme('Theme1');
        toggle[0].checked = true;
    }else if(preferred == 'Theme2'){
        useTheme('Theme2');
        toggle[1].checked = true;
    }else if(preferred == 'Theme3') {
        useTheme('Theme2');
        toggle[2].checked = true;
    }
});


//setting up the themes
const theme = {
    Theme1: {
        '--main-background': 'hsl(222, 26%, 31%)',
        '--toggleKeypad-background': 'hsl(223, 31%, 20%)',
        '--screen-background': 'hsl(224, 36%, 15%)',
    
        '--key-background': 'hsl(225, 21%, 49%)',
        '--key-shadow': 'hsl(224, 28%, 35%)',
    
        '--keyToggle-background': 'hsl(6, 63%, 50%)',
        '--keyToggle-shadow': 'hsl(6, 70%, 34%)',
    
        '--key-background-2': 'hsl(30, 25%, 89%)',
        '--key-shadow-2': 'hsl(28, 16%, 65%)',
    
        '--text-1': 'hsl(221, 14%, 31%)',
        '--text-2': 'white',
    },
    Theme2: {
        '--main-background': 'hsl(0, 0%, 90%)',
        '--toggleKeypad-background': 'hsl(0, 5%, 81%)',
        '--screen-background': 'hsl(0, 0%, 93%)',
    
        '--key-background': 'hsl(185, 42%, 37%)',
        '--key-shadow': 'hsl(185, 58%, 25%)',
    
        '--keyToggle-background': 'hsl(25, 98%, 40%)',
        '--keyToggle-shadow': 'hsl(25, 99%, 27%)',
    
        '--key-background-2': 'hsl(45, 7%, 89%)',
        '--key-shadow-2': 'hsl(35, 11%, 61%)',
    
        '--text-1': 'hsl(60, 10%, 19%)',
        '--text-2': 'white',
    },
    Theme3: {
        '--main-background': 'hsl(268, 75%, 9%)',
        '--toggleKeypad-background': 'hsl(268, 71%, 12%)',
        '--screen-background': 'hsl(268, 71%, 12%)',
    
        '--key-background': 'hsl(281, 89%, 26%)',
        '--key-shadow': 'hsl(285, 91%, 52%)',
    
        '--keyToggle-background': 'hsl(176, 100%, 44%)',
        '--keyToggle-shadow': 'hsl(177, 92%, 70%)',
    
        '--key-background-2': 'hsl(268, 47%, 21%)',
        '--key-shadow-2': 'hsl(290, 70%, 36%)',
    
        '--text-1': 'hsl(52, 100%, 62%)',
        '--text-2': 'white',
    }

}



//function for toggling the theme
//changing each value of the current variables in the css with the values of the selected theme
function useTheme(themeSelected) {
    document.documentElement.style.setProperty(
        '--main-background',
        theme[themeSelected]['--main-background']
    );
    document.documentElement.style.setProperty(
        '--toggleKeypad-background',
        theme[themeSelected]['--toggleKeypad-background']
    );
    document.documentElement.style.setProperty(
        '--screen-background',
        theme[themeSelected]['--screen-background']
    );
    document.documentElement.style.setProperty(
        '--key-background',
        theme[themeSelected]['--key-background']
    );
    document.documentElement.style.setProperty(
        '--key-shadow',
        theme[themeSelected]['--key-shadow']
    );
    document.documentElement.style.setProperty(
        '--keyToggle-background',
        theme[themeSelected]['--keyToggle-background']
    );
    document.documentElement.style.setProperty(
        '--keyToggle-shadow',
        theme[themeSelected]['--keyToggle-shadow']
    );
    document.documentElement.style.setProperty(
        '--key-background-2',
        theme[themeSelected]['--key-background-2']
    );
    document.documentElement.style.setProperty(
        '--key-shadow-2',
        theme[themeSelected]['--key-shadow-2']
    );
    document.documentElement.style.setProperty(
        '--text-1',
        theme[themeSelected]['--text-1']
    );
    document.documentElement.style.setProperty(
        '--text-2',
        theme[themeSelected]['--text-2']
    );
}

