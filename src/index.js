import './styles.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';

loadHome();

const cont = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

home.addEventListener("click", () => {
    resetUI();
    loadHome();
})

menu.addEventListener("click", () => {
    resetUI();
    loadMenu();
})

about.addEventListener("click", () => {
    resetUI();    
    loadAbout();
})


function resetUI() {
    cont.innerHTML = '';
}