function changeMode(){
    changeClasses();

}

function changeClasses(){
    button.classList.toggle(darModeClass); /*Toggle - adiciona classes aos elementos */
    h1.classList.toggle(darModeClass) ;
    body.classList.toggle(darModeClass) ;
    footer.classList.toggle(darModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkmode = "Dark Mode";

    if(body.classList.contains(darModeClass)) {/*  contains -  Verifica se o elemento selecionado contém a classe*/
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }

    button.innerHTML = lightMode;
    h1.innerHTML = darkmode + "ON";

}

const darModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(button);

button.addEventListener('click', changeMode)